import rateLimit from "express-rate-limit";

export const chatLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: {
    message: "You are sending messages too fast. Please wait a minute before trying again.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
