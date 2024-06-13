import { Router } from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  profileAdmin,
} from "../controllers/admin.controller.js";

const router = Router();

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);
router.post("/admin/logout", logoutAdmin);

router.get("/admin/profile", profileAdmin);

// Agrega más rutas según tus necesidades aquí...

export default router;
