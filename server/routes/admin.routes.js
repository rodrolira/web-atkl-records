import { Router } from "express";
import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  profileAdmin,
  verifyToken,
} from "../controllers/admin.controller.js";
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);
router.post("/admin/logout", logoutAdmin);
router.get("/admin/protected", validateToken);
router.get("/admin/verify", verifyToken);
router.get("/admin/profile", profileAdmin);

// Agrega más rutas según tus necesidades aquí...

export default router;
