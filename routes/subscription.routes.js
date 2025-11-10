import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
  getSubscription,
  updateSubscription,
  deleteSubscription,
  cancelSubscription,
  getUpcomingRenewals,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Get all subscriptions for an authenticated user
subscriptionRouter.get("/", authorize, getUserSubscriptions);

// get a specific subscription
subscriptionRouter.get("/:id", authorize, getSubscription);

// create a new subscription
subscriptionRouter.post("/", authorize, createSubscription);

// update a subscription
subscriptionRouter.put("/:id", authorize, updateSubscription);

// delete a subscription
subscriptionRouter.delete("/:id", authorize, deleteSubscription);

// cancel a subscription
subscriptionRouter.put("/:id/cancel", authorize, cancelSubscription);

// get upcoming renewals
subscriptionRouter.get("/upcoming-renewal", authorize, getUpcomingRenewals);

export default subscriptionRouter;
