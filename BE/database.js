import mongoose from "mongoose";

// Connect to DB
const connectDB = () => {
    try {
        const db = mongoose.connect(process.env.MONGODB_CONNECT_URI)
        console.log("Connecting to MongoDB successfully");
        return db;
    } catch (error) {
        console.log("Failed to connect to MongoDB");
    }
}

export default connectDB