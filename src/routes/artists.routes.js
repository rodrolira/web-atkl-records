// routes/artists.routes.js
import express from 'express';
const router = express.Router();
import { getAllArtists, getArtistById } from '../controllers/artists.controller.js';

router.get('/artists', getAllArtists);
router.get('/artists/:id', getArtistById);

export default router;
