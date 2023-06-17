import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL deberia estar definido");
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URL, opts);

    if (connection.readyState === 1) {
      console.log("MongoDB connectd");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(false);
  }
};
