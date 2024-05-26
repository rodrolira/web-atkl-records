import { ApolloServer } from "apollo-server";
import app from "./app.js";
import connectDB from "./db/db.js";
import typeDefs from "./db/schema.js";
import resolvers from "./db/resolvers.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Connect DB
connectDB();

//Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // console.log(req.headers["authorization"]);
    const token = req.headers['authorization'] || ''

    if (token) {
      try {
        const user = jwt.verify(token)
        console.log(user)

        return {
          user
        }

      } catch (error) {
        console.log('Hubo un Error')
        console.log(error);
      }
    }
  },
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

//App
app.listen(3000);

console.log("🚀 Server ready at", 3000);
