import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "user name is required"],
      trim: true,
      minLength: 2,
      maxLength: 25,
    },
    email: {
      type: String,
      required: [true, "user's email is required"],
      unique: true,
      trim: true,
      minLength: 2,
      maxLength: 255,
      match: [/\S+@\S+\.\S+/, "Please fill a valid Email Address"],
    },
    password: {
      type: String,
      required: [true, "user's password required"],
      minLength: 5,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("SubcriptionUser", userSchema);

export default User;
