// routes/protectedRoutes.js

import { Router } from "express";
const router = Router();
import validateToken from "../middlewares/validateToken.js"
// Ruta protegida que usa el middleware
router.get("/protected", validateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
