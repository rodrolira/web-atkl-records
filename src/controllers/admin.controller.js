import Admin from "../models/admin.model.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/jwt.js";
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

// Registro de Admin
export const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const adminFound = await Admin.findOne({ email });
        if (adminFound) return res.status(400).json(['Admin already exists']);

        const passwordHash = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            username,
            email,
            password: passwordHash
        });

        const adminSaved = await newAdmin.save();
        const token = await createAccessToken({ id: adminSaved._id });

        res.cookie('token', token);

        res.json({
            id: adminSaved._id,
            username: adminSaved.username,
            email: adminSaved.email
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login de Admin
export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const adminFound = await Admin.findOne({ username });
        if (!adminFound) return res.status(400).json({ message: 'Admin not found' });

        const isMatch = await bcrypt.compare(password, adminFound.password);
        if (!isMatch) return res.status(400).json({ message: 'Wrong password' });

        const token = await createAccessToken({ id: adminFound._id });
        res.cookie('token', token);

        res.json({
            id: adminFound._id,
            username: adminFound.username,
            email: adminFound.email
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Logout de Admin
export const logoutAdmin = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

// Perfil de Admin
export const profileAdmin = async (req, res) => {
    const adminFound = await Admin.findById(req.user.id);
    if (!adminFound) return res.status(400).json({ message: 'Admin not found' });

    return res.json({
        id: adminFound._id,
        username: adminFound.username,
        email: adminFound.email,
        createdAt: adminFound.createdAt,
        updatedAt: adminFound.updatedAt
    });
};

// Verificar token de Admin
export const verifyTokenAdmin = async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' });

        const adminFound = await Admin.findById(user.id);
        if (!adminFound) return res.status(401).json({ message: 'Unauthorized' });

        return res.json({
            id: adminFound._id,
            username: adminFound.username,
            email: adminFound.email
        });
    });
};
