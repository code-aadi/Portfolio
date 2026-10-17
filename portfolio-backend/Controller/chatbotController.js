import { OpenAI } from "openai";
import systemPrompt from "../prompts/systemPrompt.js";

export const chatBot = async (req, res) => {
  try {
    const { question } = req.body ?? {};

    if (typeof question !== "string" || !question.trim()) {
      return res.status(400).json({
        message: "Please provide a valid question.",
      });
    }

    if (!process.env.CLOUDFLARE_API_TOKEN || !process.env.CLOUDFLARE_ACCOUNT_ID) {
      console.error("Missing CLOUDFLARE_API_TOKEN or CLOUDFLARE_ACCOUNT_ID");
      return res.status(500).json({ message: "Server configuration error." });
    }

    const cloudflareAI = new OpenAI({
      apiKey: process.env.CLOUDFLARE_API_TOKEN,
      baseURL: `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/v1`,
    });

    const response = await cloudflareAI.chat.completions.create({
      model: "@cf/meta/llama-3.1-8b-instruct-fast", // ← Updated model
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question.trim() }
      ],
      temperature: 0.3,
      max_tokens: 400,
    });

    if (response && response.choices?.[0]?.message?.content) {
      return res.status(200).json({
        reply: response.choices[0].message.content,
      });
    }

    return res.status(200).json({
      reply: "Hello! I am Aditya's portfolio assistant. How can I help you today?",
    });

  } catch (error) {
    console.error("Cloudflare AI API Error:", error);
    return res.status(500).json({
      reply: "Sorry, I am having trouble connecting right now. Please try again.",
    });
  }
};