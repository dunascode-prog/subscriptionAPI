import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/errors.middlewares.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new users" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete users" });
});

export default userRouter;
