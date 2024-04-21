import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://atkl-records:root@atkl.ewi6so6.mongodb.net/?retryWrites=true&w=majority&appName=ATKL')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
