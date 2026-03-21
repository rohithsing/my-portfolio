
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

// Fix: Use process.env.API_KEY directly for initialization as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal assistant for Rohith Singh, a world-class AI Engineer and Full-stack Developer.
Your goal is to answer questions about Rohith's skills, projects, and professional background.

About Rohith:
- Skills: ${PORTFOLIO_DATA.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('. ')}
- Roles: ${PORTFOLIO_DATA.roles.join(', ')}
- Notable Projects: ${PORTFOLIO_DATA.projects.map(p => p.title).join(', ')}
- Email: ${PORTFOLIO_DATA.email}
- Style: Professional, friendly, and tech-savvy.

Be concise and helpful. If you don't know something specifically about his personal life, redirect them to his professional projects or suggest they contact him via email.
`;

export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Correctly accessing the text property as per the response object definition.
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later or contact Rohith directly!";
  }
}
