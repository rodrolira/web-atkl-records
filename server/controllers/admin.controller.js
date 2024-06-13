// controllers/admin.controller.js

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {
  createAdmin,
  findAdminByEmail,
  findAdminById,
  findAdminByUsername,
} from "../models/admin.model.js";

dotenv.config();

export const registerAdmin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingAdmin = await findAdminByEmail(email);

    if (existingAdmin) {
      return res.status(400).json(["Admin already exists"]);
    }

    await createAdmin({ username, email, password });

    const token = jwt.sign({ email }, process.env.SECRET, { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await findAdminByUsername(username);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username }, process.env.SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export const profileAdmin = async (req, res) => {
  const { email } = req.user;

  try {
    const admin = await findAdminByEmail(email);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Utilizando findAdminById para obtener el perfil del admin por su ID
    const adminProfile = await findAdminById(admin.id);

    if (!adminProfile) {
      return res.status(404).json({ message: "Admin profile not found" });
    }

    res.status(200).json({
      id: admin.id,
      username: admin.username,
      email: admin.email,
      createdAt: admin.created_at,
      updatedAt: admin.updated_at,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
