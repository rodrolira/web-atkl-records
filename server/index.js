import app from "./app.js";
// import  typeDefs from "./db/schema.js";
// import resolvers  from "./db/resolvers.js";
import connectDB from "./db/db.js";

// startApolloServer(typeDefs, resolvers, connectDB);

//Connect DB
connectDB();


// App
app.listen(3000);

console.log("🚀 Server ready at", 3000);
