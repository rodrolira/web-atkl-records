// admin.controller.js

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Admin from '../models/admin.model.js'
import dotenv from 'dotenv'

dotenv.config()

  const createToken = (adminId) => {
    return jwt.sign({ adminId }, process.env.SECRET, {
      expiresIn: '12h',
    })
  }
export const createAdmin = async ({ username, email, password }) => {
  try {
    const newAdmin = await Admin.create({
      username,
      email,
      password,
    })
    return newAdmin
  } catch (error) {
    throw new Error(`Error creating admin: ${error.message}`)
  }
}

export const findAdminByEmail = async (email) => {
  try {
    const admin = await Admin.findOne({ where: { email } })
    if (!admin) throw new Error('Admin not found')
    return admin
  } catch (error) {
    throw new Error(`Error finding admin by email: ${error.message}`)
  }
}

export const findAdminByUsername = async (username) => {
  try {
    const admin = await Admin.findOne({ where: { username } })
    if (!admin) throw new Error('Admin not found')
    return admin
  } catch (error) {
    throw new Error(`Error finding admin by username: ${error.message}`)
  }
}

export const loginAdmin = async (username, password) => {
  try {
    const admin = await Admin.findOne({ where: { username } })

    if (!admin) {
      throw new Error('Admin not found')
    }

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
      throw new Error('Invalid credentials')
    }

const token = createToken(admin.id)

    return token
  } catch (error) {
    throw new Error(`Error logging in admin: ${error.message}`)
  }
}

export const profileAdmin = async (adminId) => {
  try {
    const admin = await Admin.findByPk(adminId)

    if (!admin) {
      throw new Error('Admin not found')
    }

    return admin
  } catch (error) {
    throw new Error(`Error fetching admin profile: ${error.message}`)
  }
}

 export const verifyTokenAdmin = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET)
    const admin = await Admin.findByPk(decoded.adminId)

    if (!admin) {
      throw new Error('Unauthorized')
    }

    return admin
  } catch (error) {
    throw new Error('Unauthorized')
  }
}

export const logoutAdmin = async (req, res) => {
  try {
    res.clearCookie('token')
    res.json({ message: 'Logout successful' })
  } catch (error) {
    console.error('Error logging out admin:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}
