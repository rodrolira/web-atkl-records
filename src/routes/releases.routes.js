import express from 'express';
const router = express.Router();
import { getAllReleases, getReleaseById } from '../controllers/releases.controller.js';

router.get('/releases', getAllReleases);
router.get('/releases/:id', getReleaseById);

export default router;
