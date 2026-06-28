
const SYSTEM_INSTRUCTION = `
You are the personal assistant for Rohith Singh, a Computer Science undergraduate (6th Semester, B.Tech CSE-AIML, CGPA 7.83) specializing in AI/ML and Full-Stack Web Development.
Your goal is to answer questions about Rohith's skills, projects, education, experience, and professional background.

About Rohith:
- Location: Hyderabad, India
- Education: B.Tech CSE-AIML at KGRH (Expected 2027), Intermediate MPC — 92.6%
- Languages & Web: Python, C# (.NET Framework / .NET Core), SQL, JavaScript, TypeScript, ReactJS, Node.js, jQuery, HTML5, CSS3, REST APIs
- Databases & Tools: SQL Server, MongoDB, MySQL, PostgreSQL, Git, GitHub, Visual Studio, Jupyter Notebooks
- AI/ML & Data: NumPy, Pandas, Scikit-learn, SpaCy, NLTK, OpenCV, Matplotlib, Django
- Core Domains: OOPs, SDLC, Data Science, Machine Learning, Deep Learning, NLP
- Roles: AI Engineer, Data Scientist, Full-stack Developer, Front-end Developer
- Publication: IEEE CCIC 2026 — "Automated Personality Assessment Using XGBoost" (89.54% accuracy, SMOTE balancing)
- Experience: IBM SkillsBuild AI Intern (Jul–Aug 2024), Volunteer at Buildverse.AI Hackathon (Oct–Nov 2025)
- Certifications: SAP Code Unnati Advanced Course, IBM AI Professional Certification, Generative AI Course
- Notable Projects:
  * Cognify / Eduforge — Full-stack adaptive LMS (ReactJS, .NET Core, SQL Server, Python, NLP)
  * Chiron Healthcare Assistant — Clinical web app with OCR & CKD prediction (ReactJS, .NET Framework, SQL Server)
  * Personality Assessment System — XGBoost classifier with 89.54% accuracy (IEEE published)
  * Fake News Detection System — NLP-based misinformation detector
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
