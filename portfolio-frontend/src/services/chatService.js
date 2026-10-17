export async function getReply(message) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/chatbot/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }

    const data = await response.json();
    
    return data.reply || "No response received from AI.";
  } catch (error) {
    throw error;
  }
}

