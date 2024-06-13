// app.js
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import http from "http";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import artistsRoutes from "./routes/artists.routes.js";
import releasesRoutes from "./routes/releases.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import contactFormRoutes from "./routes/contact-form.routes.js";

dotenv.config();

// export async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  // const httpServer = http.createServer(app);

  //Server
  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   context: ({ req }) => {
  //     // console.log(req.headers["authorization"]);
  //     // console.log(req.headers)
  //     const token = req.headers["authorization"] || "";

  //     if (token) {
  //       try {
  //         const user = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET);
  //          console.log(user);

  //         return {
  //           user,
  //         };
  //       } catch (error) {
  //         console.log("Hubo un Error");
  //         console.log(error);
  //       }
  //     }
  //   },
  // });

  // await server.start();

  // server.listen().then(({ url }) => {
  //   console.log(`🚀 Server ready at ${url}`);
  // });

  // app.use("/", cors({
  //   origin: "http://localhost:5173",
  //   credentials: true
  // }), express.json(), expressMiddleware(server));

  // await new Promise(resolve =>
  //   httpServer.listen({
  //     port: 4000,
  //   })
  // );

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
      sameSite: "none",
      secure: true,
    })
  );


  app.use("/api", authRoutes);
  app.use("/api", taskRoutes);
  app.use("/api", artistsRoutes);
  app.use("/api", releasesRoutes);
  app.use("/api", adminRoutes);
  app.use("/api", contactFormRoutes);

  app.use((err, req, res, next) => {
    console.log(err);
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).send(message);
    next();
  });

  app.use((req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

  // Ruta para manejar POST requests a /api/releases
app.post('/api/releases', (req, res) => {
  const newRelease = req.body;

  // Aquí deberías agregar la lógica para guardar el nuevo lanzamiento
  // Ejemplo: Guardar en la base de datos

  res.status(201).json({ message: 'Release created successfully', release: newRelease });
});


export default app;
