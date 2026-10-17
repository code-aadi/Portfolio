import express from "express";
import cors from "cors";
import "dotenv/config";
import chatbotRouter from "./Routes/chatbotRoute.js";

const app = express();
app.set("trust proxy", 1);
const port = process.env.PORT || 5000; 

const allowedOrigins = [
  "http://localhost:5173",          
  process.env.FRONTEND_URL,         
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use("/api/chatbot", chatbotRouter)


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
