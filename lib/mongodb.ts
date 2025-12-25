import mongoose from 'mongoose';

/**
 * Global type declaration for mongoose connection caching
 * This prevents TypeScript errors when accessing global.mongoose
 */
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// MongoDB connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Validate that MONGODB_URI is defined
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env file'
  );
}

/**
 * Global cache for mongoose connection
 * In development, Next.js hot reloading can cause multiple connections
 * This cache ensures we reuse the existing connection instead of creating new ones
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes and returns a MongoDB connection using Mongoose
 * 
 * Features:
 * - Connection caching to prevent multiple connections in development
 * - Proper TypeScript typing without using 'any'
 * - Error handling for connection failures
 * - Optimized connection options for production use
 * 
 * @returns {Promise<mongoose.Connection>} The active MongoDB connection
 */
async function connectDB(): Promise<mongoose.Connection> {
  // Return cached connection if it exists
  if (cached.conn) {
    return cached.conn;
  }

  // If no cached promise exists, create a new connection
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable mongoose buffering for better error handling
    };

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongooseInstance) => {
        console.log('✅ MongoDB connected successfully');
        return mongooseInstance.connection;
      })
      .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
        // Reset the promise so the next call will retry
        cached.promise = null;
        throw error;
      });
  }

  try {
    // Wait for the connection promise to resolve
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset both cache values on error
    cached.promise = null;
    cached.conn = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;
