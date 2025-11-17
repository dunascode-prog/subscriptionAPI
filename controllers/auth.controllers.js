import mongoose from "mongoose";
import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, email, password } = req.body;
    //check if user already exists
    const existingUser = await User.find({ email });

    if (existingUser.Length > 0) {
      console.log("im executing");
      const error = new Error("User Already Exists");
      error.statusCode = 400;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create(
      [{ name, email, password: hashedPassword }],
      {
        session,
      }
    );

    // eslint-disable-next-line no-undef
    const token = jwt.sign({ id: newUser[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    newUser.password = undefined;

    res.status(201).json({
      sucess: true,
      message: "data created Successfully",
      data: {
        token: token,
        users: newUser,
      },
    });
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const signedInUser = await User.findOne({ email });

    if (!signedInUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      signedInUser.password
    );

    if (!isPasswordValid) {
      const error = new Error("Invalid Password");
      error.statusCode = 401;
      throw error;
    }
    const token = jwt.sign({ id: signedInUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
    res.status(200).json({
      sucess: true,
      message: "User signed in successfully",
      data: {
        token,
        signedInUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {};
