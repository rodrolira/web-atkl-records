// models/user.model.js

import pool from "../db/db.js";
import bcrypt from "bcryptjs";

export const createUser = async ({ username, email, password }) => {
  const passwordHash = await bcrypt.hash(password, 10);
  const query = {
    text: `INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *`,
    values: [username, email, passwordHash],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const findUserByEmail = async (email) => {
  const query = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error finding user by email: ${error.message}`);
  }
};

export const findUserByUsername = async (username) => {
  const query = {
    text: "SELECT * FROM users WHERE username = $1",
    values: [username],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error finding user by email: ${error.message}`);
  }
};

export const findUserById = async (id) => {
  const query = {
    text: "SELECT * FROM users WHERE id = $1",
    values: [id],
  };

  try {
    const result = await pool.query(query);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error finding user by ID: ${error.message}`);
  }
};
