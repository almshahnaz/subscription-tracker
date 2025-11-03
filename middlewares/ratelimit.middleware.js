import { rateLimit } from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  statusCode: 429,
  message: "Rate limit exceeded. Try again after 15 minutes",
});

export default limiter;
