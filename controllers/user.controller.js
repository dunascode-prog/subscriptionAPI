import User from "../models/user.models.js";

export const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ sucess: true, data: allUsers });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ sucess: true, data: user });
  } catch (error) {
    next(error);
  }
};

export const setUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({ sucess: true, data: allUsers });
  } catch (error) {
    next(error);
  }
};
