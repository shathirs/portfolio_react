const GROQ_MODEL = "llama-3.1-8b-instant";

export const buildPortfolioPrompt = (question: string, portfolioContext: string) => {
  return [
    "You are an AI assistant for Shathir Sheriff's portfolio website.",
    "Answer only with portfolio-relevant information from the provided context.",
    "If the answer is not in the context, say you don't have that information yet and ask the visitor to contact Shathir.",
    "",
    "Portfolio context:",
    portfolioContext,
    "",
    `Visitor question: ${question}`
  ].join("\n");
};

export const getPortfolioAiReply = async (question: string, portfolioContext: string) => {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;

  if (!apiKey) {
    return "AI assistant is not configured yet. Add VITE_GROQ_API_KEY in your .env file.";
  }

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        temperature: 0.3,
        messages: [
          {
            role: "user",
            content: buildPortfolioPrompt(question, portfolioContext)
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const apiErrorMessage = data?.error?.message;
    if (apiErrorMessage) {
      return `AI assistant error: ${apiErrorMessage}`;
    }
    return "AI assistant is temporarily unavailable. Please try again.";
  }

  const reply = data?.choices?.[0]?.message?.content;

  return reply || "I couldn't generate a response right now. Please try again.";
};
