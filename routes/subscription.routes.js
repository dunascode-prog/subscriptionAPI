import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  getUserSubscriptions,
  createSubscription,
} from "../controllers/subscription.controllers.js";

const subscriptionRouter = Router();

subscriptionRouter.post("/create-sub", authorize, createSubscription);
subscriptionRouter.get("/get-sub", authorize, getUserSubscriptions);

export default subscriptionRouter;
