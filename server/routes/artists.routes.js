// routes/artists.routes.js
import express from "express";
const router = express.Router();
import {
  getArtists,
  addArtist,
  deleteArtist,
  updateArtist,
  getArtistById,
  getArtistReleases,
} from "../controllers/artists.controller.js";
import multer from "multer";

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define dónde se almacenarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Define el nombre del archivo
  },
});

const upload = multer({ storage });

router.get("/artists", getArtists);
router.get("/artists/:id", getArtistById);
router.get("/artists/:id/releases", getArtistReleases);

router.post("/artists", upload.single("image"), addArtist);

router.put("/artists/:id", upload.single("image"), updateArtist);
router.delete("/artists/:id", deleteArtist);

export default router;
