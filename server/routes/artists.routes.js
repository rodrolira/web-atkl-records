// routes/artists.routes.js
import express from 'express'
const router = express.Router()
import {
  getArtists,
  fetchArtistById,
  addArtist
} from '../controllers/artists.controller.js'


router.get('/artists', getArtists)
router.get('/artists/:id', fetchArtistById)

router.post('/artists', addArtist)

export default router
