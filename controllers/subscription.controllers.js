import subscriptionModel from "../models/subscription.models.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await subscriptionModel.create({
      ...req.body,
      user: req.user.id,
    });
    res.status(201).json({
      success: true,
      data: {
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user.id != req.body.user) {
      const error = new Error("you don't have access to these subscriptions");
      error.statusCode = 401;
      throw error;
    }
    const subscriptions = await subscriptionModel.find({ user: req.user.id });
    res.status(200).json({
      success: true,
      message: {
        subscriptions,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const getSubscription = async (req, res, next) => {
  try {
    if (req.user.id != req.body.id) {
      const error = new Error("you don't have access to these subscription");
      error.statusCode = 401;
      throw error;
    }
    console.log(req.params);
    //investigate the right wy the route should be and complete the controller
  } catch (error) {
    next(error);
  }
};
