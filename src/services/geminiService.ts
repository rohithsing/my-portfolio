
const SYSTEM_INSTRUCTION = `
You are the personal assistant for Rohith Singh, a world-class AI Engineer and Full-stack Developer.
Your goal is to answer questions about Rohith's skills, projects, and professional background.

About Rohith:
- Skills: Front-end: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS. Full-stack: Node.js, Express, Python, Django, PostgreSQL, MongoDB, Firebase, Docker. AI & ML: TensorFlow, PyTorch, Scikit-learn, OpenAI API, Gemini API, LangChain.
- Roles: AI Engineer, Data Scientist, Front-end Developer, Full-stack Developer
- Notable Projects: Fake News Detector (AI-powered fact-checker using Gemini AI), Chiron-AI (Full-stack healthcare assistant), Personality Assessment System, Cognify / Eduforge (AI LMS)
- Email: rohitsingh767194@gmail.com
- LinkedIn: https://www.linkedin.com/in/rohithsing
- GitHub: https://github.com/rohithsing
- Style: Professional, friendly, and tech-savvy.

Be concise and helpful. If you don't know something specifically about his personal life, redirect them to his professional projects or suggest they contact him via email.
`;

export async function askAssistant(prompt: string): Promise<string> {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return "Chat assistant is currently unavailable. Please contact Rohith directly via email or WhatsApp.";
    }

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey });

    const modelsToTry = [
      "gemini-2.5-flash",
      "gemini-2.0-flash",
      "gemini-1.5-flash",
      "gemini-1.5-flash-8b",
      "gemini-pro"
    ];

    let lastError: any = null;

    for (const model of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: model,
          contents: prompt,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });
        return response.text || "I'm sorry, I couldn't process that request.";
      } catch (error: any) {
        lastError = error;
        if (error.status === 404 || error.message?.includes("not found")) {
          continue;
        }
        break;
      }
    }

    throw lastError;
  } catch (error: any) {
    console.error("Chat Error:", error);
    return `Connection error: ${error.message}`;
  }
}
