// index.js
import app from "./app.js";
// import  typeDefs from "./db/schema.js";
// import resolvers  from "./db/resolvers.js";
import pool from "./db/db.js";

// startApolloServer(typeDefs, resolvers, connectDB);

//Connect DB
pool
  .connect()
  .then(() => {
    // App
    app.listen(3000, () => {
      console.log("🚀 Server ready at", 3000);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to PostgreSQL:", err);
  });
