// routes/discography.routes.js
import { Router } from 'express'
import Discography from '../models/discography.model.js'

const router = Router()

// Crear varios tracks a partir de datos CSV
router.post('/discography/bulk', async (req, res) => {
    try {
        const tracks = req.body

        // Verifica que el cuerpo de la solicitud sea un array
        if (!Array.isArray(tracks)) {
            return res.status(400).json({ error: 'Los datos deben ser una lista de registros.' })
        }

        // Crea los registros en masa
        const results = await Promise.all(tracks.map(track => Discography.create(track)))
        res.status(201).json(results)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Crear un nuevo track
router.post('/discography', async (req, res) => {
    try {
        const track = await Discography.create(req.body)
        res.status(201).json(track)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Obtener todos los tracks
router.get('/', async (req, res) => {
    try {
        const tracks = await Discography.findAll()
        res.status(200).json(tracks)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Obtener un track por ID
router.get('/:id', async (req, res) => {
    try {
        const track = await Discography.findByPk(req.params.id)
        if (!track) return res.status(404).json({ error: 'Track not found' })
        res.status(200).json(track)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Actualizar un track por ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Discography.update(req.body, {
            where: { id: req.params.id }
        })
        if (updated) {
            const updatedTrack = await Discography.findByPk(req.params.id)
            res.status(200).json(updatedTrack)
        } else {
            res.status(404).json({ error: 'Track not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Eliminar un track por ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Discography.destroy({
            where: { id: req.params.id }
        })
        if (deleted) {
            res.status(204).json({})
        } else {
            res.status(404).json({ error: 'Track not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router
