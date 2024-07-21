// routes/roles.js
import express from 'express'
import Artist from '../models/artist.model.js'
import { Sequelize } from 'sequelize'

const router = express.Router()

// Endpoint para obtener los roles únicos
router.get('/roles', async (req, res) => {
  try {
    // Obtener todos los roles únicos de la base de datos
  const roles = await Artist.findAll({
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('role')), 'role']],
      raw: true,
    })
    // Formatear los roles como una lista de objetos con id y label
    const formattedRoles = roles.map((role, index) => ({
      id: index + 1, // o usa un identificador único si tienes uno
      value: role.role,
      label: role.role
    }))

    res.json(formattedRoles)
  } catch (error) {
    console.error('Error fetching roles:', error)
    res.status(500).json({ message: 'Error fetching roles' })
  }
})

export default router
