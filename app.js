import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/errors.middlewares.js";

//work on installing the auth packages
const app = express();

await connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/auth", subscriptionRouter);

app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Welcome to the subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}.....`
  );
});

export default app;
