import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET subscription info" })
);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "Update subsciption" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "Delete subsciption" })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "CANCEL subscription" })
);
subscriptionRouter.get("/upcoming-renewal", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);

export default subscriptionRouter;
