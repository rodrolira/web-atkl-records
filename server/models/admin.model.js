// models/admin.model.js

import pool from "../db/db.js";
import bcrypt from "bcryptjs";

export const createAdmin = async ({ username, email, password }) => {
  const passwordHash = await bcrypt.hash(password, 10);
  const query = {
    text: `INSERT INTO admins(username, email, password) VALUES($1, $2, $3) RETURNING *`,
    values: [username, email, passwordHash],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating admin: ${error.message}`);
  }
};

export const findAdminByEmail = async (email) => {
  const query = {
    text: "SELECT * FROM admins WHERE email = $1",
    values: [email],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error finding admin by email: ${error.message}`);
  }
};
export const findAdminByUsername = async (username) => {
  const query = {
    text: "SELECT * FROM admins WHERE username = $1",
    values: [username],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error finding admin by username: ${error.message}`);
  }
};
export const findAdminById = async (id) => {
  const query = {
    text: "SELECT * FROM admins WHERE id = $1",
    values: [id],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error finding admin by ID: ${error.message}`);
  }
};
