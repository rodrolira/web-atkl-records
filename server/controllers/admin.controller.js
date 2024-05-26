import Admin from "../models/admin.model.js";
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
export const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const userFound = await Admin.findOne({ email })

        if (userFound) return res.status(400).json(['User already exists'])

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new Admin({
            username,
            email,
            password: passwordHash
        })

        const userSaved = await newUser.save()
        const adminToken = await createAccessToken({ id: userSaved._id })

        res.cookie('adminToken', adminToken)


        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {

        const userFound = await Admin.findOne({ username })
        if (!userFound) return res.status(400).json({ message: 'User not found' })

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) return res.status(400).json({ message: 'Wrong password' })

        const adminToken = await createAccessToken({ id: userFound._id })

        res.cookie('adminToken', adminToken)


        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const logoutAdmin = (req, res) => {
    res.cookie('adminToken', "", {
        expires: new Date(0),
    })
    return res.sendStatus(200)
}

export const profileAdmin = async (req, res) => {
    const userFound = await Admin.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: 'User not found' })
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
}

export const verifyAdminToken = async (req, res) => {
    const { adminToken } = req.cookies

    if (!adminToken) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(adminToken, process.env.SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: 'Unauthorized' })

        const userFound = await Admin.findById(user.id)
        if (!userFound) return res.status(401).json({ message: 'Unauthorized' })

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        })
    })
}

