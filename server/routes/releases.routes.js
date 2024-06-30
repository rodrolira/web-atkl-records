// routes/release.routes.js
import express from "express";
import multer from "multer"; // Importa multer para manejar la carga de archivos
import {
  addRelease,
  getReleases,
  fetchReleaseById,
  updateRelease,
  deleteRelease,
} from "../controllers/releases.controller.js";

const router = express.Router();
// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define dónde se almacenarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Define el nombre del archivo
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Example limit: 5MB
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  },
});

// Rutas
router.post("/releases", upload.single("coverImageUrl"), addRelease);
router.get("/releases", getReleases);
router.get("/releases/:id", fetchReleaseById);
router.put("/releases/:id", upload.single("coverImageUrl"), updateRelease);
router.delete("/releases/:id", deleteRelease);

export default router;
