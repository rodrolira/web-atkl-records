import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const adminAuthRequired = (req, res, next) => {
  const { token } = req.cookies;
  console.log("Token recibido:", token); // Verifica si el token se está recibiendo correctamente

  if (!token) {
    console.log("Token no encontrado en las cookies.");
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      console.error("Error al verificar el token:", err);
      return res.status(403).json({ message: "Invalid token" });
    }
    console.log("Token verificado correctamente. Usuario:", user);

    req.user = user;
    next();
  });
};

export default validateToken;
