import { GoogleGenAI } from "@google/genai";

// Portfolio data embedded directly so the function is self-contained
const SYSTEM_INSTRUCTION = `
You are the personal assistant for Rohith Singh, a world-class AI Engineer and Full-stack Developer.
Your goal is to answer questions about Rohith's skills, projects, and professional background.

About Rohith:
- Skills: Front-end: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS. Full-stack: Node.js, Express, Python, Django, PostgreSQL, MongoDB, Firebase, Docker. AI & ML: TensorFlow, PyTorch, Scikit-learn, OpenAI API, Gemini API, LangChain.
- Roles: AI Engineer, Front-end Developer, Full-stack Developer
- Notable Projects: Fake News Detector (AI-powered fact-checker using Gemini AI), Chiron-AI (Full-stack healthcare assistant), Real-time SaaS Dashboard, Intelligent Data Visualization
- Email: rohitsingh767194@gmail.com
- LinkedIn: https://www.linkedin.com/in/rohithsing
- GitHub: https://github.com/rohithsing
- Style: Professional, friendly, and tech-savvy.

Be concise and helpful. If you don't know something specifically about his personal life, redirect them to his professional projects or suggest they contact him via email.
`;

export const handler = async (event: { body: string | null; httpMethod: string }) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Validate API key exists
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY environment variable is not set");
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Server configuration error" }),
    };
  }

  try {
    const { message } = JSON.parse(event.body || "{}");

    if (!message || typeof message !== "string") {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "A 'message' string is required in the request body" }),
      };
    }

    const ai = new GoogleGenAI({ apiKey });

    // Different API keys (especially free vs paid, or older keys) support different models.
    const modelsToTry = [
      "gemini-2.5-flash", 
      "gemini-2.0-flash", 
      "gemini-1.5-flash", 
      "gemini-1.5-flash-8b", 
      "gemini-pro"
    ];

    let lastError = null;

    for (const model of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: model,
          contents: message,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reply: response.text || "I'm sorry, I couldn't process that request." }),
        };
      } catch (error: any) {
        lastError = error;
        // If it's a 404 NOT_FOUND, it means the model isn't supported by this API key. Try the next one.
        if (error.status === 404 || error.message?.includes("not found")) {
          continue;
        }
        // For other errors (like auth), break out and fail.
        break;
      }
    }

    // If we exhausted all models or hit a non-404 error
    throw lastError;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        error: "Failed to get response from AI assistant",
        details: error.message || String(error)
      }),
    };
  }
};
