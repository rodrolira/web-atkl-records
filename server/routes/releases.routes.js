import express from "express";
const router = express.Router();
import {
  getReleases,
  fetchReleaseById,
} from "../controllers/releases.controller.js";

router.post("/releases");
router.get("/releases", getReleases);
router.get("/releases/:id", fetchReleaseById);

export default router;
