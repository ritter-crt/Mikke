import mongoose from 'mongoose';

// Track connection status
let isConnected = false;

export const connectToDB = async () => {
  // Sets up mongoose option (recommended)
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('Mongoose is already connected.');
    return;
  }

  try {
    // Log MongoDB URI for debugging
    console.log('MongoDB URI:', process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'mikketest',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected.');
  } catch (error) {
    // Log detailed error message
    console.error('MongoDB connection error:', error);
  }
};
