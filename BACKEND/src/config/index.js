import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ Connected to MongoDB: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
