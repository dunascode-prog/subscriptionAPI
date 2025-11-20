import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/errors.middlewares.js";

const userRouter = Router();

userRouter.get("/", authorize, getUsers);
//create a middleware that limit this request to roles
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new users" });
});

export default userRouter;
