// app.js
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
// import http from "http";
import authRoutes from "./routes/auth.routes.js";
import artistsRoutes from "./routes/artists.routes.js";
import releasesRoutes from "./routes/releases.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import contactFormRoutes from "./routes/contact-form.routes.js";
import { findUserByUsername } from "./models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import protectedRouter from "./routes/protected.js";
import validateToken from "./middlewares/validateToken.js";
// import multer from "multer";
// import path from "path";
// import { addArtist } from "./controllers/artists.controller.js";

dotenv.config();

const app = express();
// Middleware para servir archivos estáticos
app.use('/uploads', express.static('uploads'));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, `{Date.now()}_${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// app.use(
//   cors({
//     origin: 'https://atkl-react2-fzwl.vercel.app',
//     credentials: true,
//     exposedHeaders: 'Access-Control-Allow-Origin' // Agrega esta línea
//   })
// )
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cookieParser(null, {
    secure: true,
  })
);

// Middleware para todas las rutas que comiencen con /api/protected
app.use("/api/protected", validateToken); // Aplica el middleware solo a las rutas /api/protected

// Rutas protegidas
app.use("/api", protectedRouter); // Monta las rutas protegidas en /api

// Rutas públicas
app.use("/api", authRoutes);
app.use("/api", artistsRoutes);
app.use("/api", releasesRoutes);
app.use("/api", adminRoutes);
app.use("/api", contactFormRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).send(message);
  next();
});

// Login
app.post("/api/login", async (req, res) => {
  //Logia de autenticacion
  const { username, password } = req.body;
  try {
    // Buscar al usuario por su username
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Compara la contraseña proporcionada con la almacenada (hasheada)
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Genera un token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Enviar la respuesta con el token
    res.cookie("token", token, { httpOnly: true, secure: false }); // Cambia secure a true si usas HTTPS
    res.json({
      message: "Login successful",
      user: { id: user.id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Ruta para manejar POST requests a /api/releases
app.post("/api/releases", (req, res) => {
  const newRelease = req.body;

  // Aquí deberías agregar la lógica para guardar el nuevo lanzamiento
  // Ejemplo: Guardar en la base de datos

  res
    .status(201)
    .json({ message: "Release created successfully", release: newRelease });
});

// Middleware para manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

export default app;
