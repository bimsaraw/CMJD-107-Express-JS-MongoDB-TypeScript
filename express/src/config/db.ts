import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "");
        console.log("MongoDB Connected");
    } catch (error: any) {
        console.log(error.message);
    }
}

export default connectDB;