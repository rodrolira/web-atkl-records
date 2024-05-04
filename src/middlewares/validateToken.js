import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' })

        req.user = user
        next()
    })
}

export const adminAuthRequired = (req, res, next) => {
    const { adminToken } = req.cookies
    console.log("Token recibido:", adminToken); // Verifica si el adminToken se está recibiendo correctamente

    if (!adminToken) {
        console.log("Token no encontrado en las cookies.");
        return res.status(401).json({ message: 'Unauthorized' })
    }
    jwt.verify(adminToken, TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error("Error al verificar el adminToken:", err);
            return res.status(403).json({ message: 'Invalid adminToken' })
        }
        console.log("Token verificado correctamente. Usuario:", user);

        req.user = user
        next()
    })
}
