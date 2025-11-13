import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "GET all Subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription details" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "create Subscriptions" });
});
subscriptionRouter.put("/", (req, res) => {
  res.send({ title: "UPDATE all Subscriptions" });
});
subscriptionRouter.delete("/", (req, res) => {
  res.send({ title: "delete all Subscriptions" });
});
subscriptionRouter.get("/users/:id", (req, res) => {
  res.send({ title: "GET all user Subscriptions" });
});
subscriptionRouter.get("/users/:id", (req, res) => {
  res.send({ title: "GET all user Subscriptions" });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "GET all Subscriptions" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
