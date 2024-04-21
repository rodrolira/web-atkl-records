import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/atkl')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
