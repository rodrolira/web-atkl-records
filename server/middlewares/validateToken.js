// middleware/validateToken.js

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    // Si no hay token, respondemos con un estado 401 directamente
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      // Si hay un error en la verificación del token, respondemos con un estado 401
      console.error("Error verifying token:", err);
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Si el token es válido, adjuntamos el usuario decodificado al objeto `req`
    req.user = decoded;
    next();
  });
};

export default validateToken;
