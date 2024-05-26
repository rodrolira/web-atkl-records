// routes/artists.routes.js
import express from 'express'
const router = express.Router()
import {
  getAllArtists,
  getArtistById,
  addArtist
} from '../controllers/artists.controller.js'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

router.get('/artists', getAllArtists)
router.get('/artists/:id', getArtistById)

router.post('/artists', upload.single('profileImage'), addArtist)

export default router
