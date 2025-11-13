import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    `Please define the MONGODB enviroment variable inside .env.${NODE_ENV}.local`
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to database in ${NODE_ENV} env`);
  } catch (error) {
    console.error("Error coneection to database: ", error);

    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectToDatabase;
