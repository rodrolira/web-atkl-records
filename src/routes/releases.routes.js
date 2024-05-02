import express from 'express';
const router = express.Router();
import { getAllReleases, getReleaseById } from '../controllers/releases.controller.js';

router.post('/upload', (req, res) => {
    console.log(req.files)
    req.send('Upload')
})

router.get('/releases', getAllReleases);
router.get('/releases/:id', getReleaseById);

export default router;
