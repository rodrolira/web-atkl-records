import { ApolloServer } from 'apollo-server'
import app from './app.js'
import connectDB from './db/db.js'
import typeDefs from './db/schema.js'
import resolvers from './db/resolvers.js'

//Connect DB
connectDB()

//Server
const server = new ApolloServer({
  typeDefs,
  resolvers
})
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})

//App
app.listen(3000)

console.log('🚀 Server ready at', 3000)
