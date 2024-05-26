import { startApolloServer } from "./app.js";
import  typeDefs from "./db/schema.js";
import resolvers  from "./db/resolvers.js";
import connectDB from "./db/db.js";

startApolloServer(typeDefs, resolvers, connectDB);

//Connect DB
connectDB();
