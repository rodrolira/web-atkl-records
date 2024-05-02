import mongoose from 'mongoose'
import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'

const uri =
  'mongodb+srv://rodro_music:root@atkl.ewi6so6.mongodb.net/?retryWrites=true&w=majority&appName=ATKL'

dotenv.config()

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://rodro_music:root@atkl.ewi6so6.mongodb.net/?retryWrites=true&w=majority&appName=ATKL'
    )
      await client.db('admin').command({ ping: 1 })

    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}
export default connectDB
