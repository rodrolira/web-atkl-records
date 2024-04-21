import app from "./app.js";
import { connectToMongoDB } from "./db.js";

connectToMongoDB()
app.listen(3000)
console.log('listening on port', 3000)
