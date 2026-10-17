import express from "express"
import { chatBot } from "../Controller/chatbotController.js"
import { chatLimiter } from "../middlewares/rateLimits.js"

const chatbotRouter = express.Router()

chatbotRouter.post("/chat", chatLimiter, chatBot)

export default chatbotRouter