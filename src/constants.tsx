
import { Project, Skill } from './types';

export const PORTFOLIO_DATA = {
  name: "Rohith Singh",
  email: "rohitsingh767194@gmail.com",
  whatsapp: "917671948680",
  socials: {
    linkedin: "https://www.linkedin.com/in/rohithsing",
    github: "https://github.com/rohithsing",
    kaggle: "https://www.kaggle.com/rohithsing",
    instagram: "https://www.instagram.com/r0h1th_s1n9h",
  },
  roles: ['AI Engineer', 'Data Scientist', 'Front-end Developer', 'Full-stack Developer'],
  about: "I'm a passionate developer with a unique blend of expertise spanning Front-end, Full-stack, Artificial Intelligence & Machine Learning. My journey in tech is driven by a curiosity to build systems that look great and think intelligently.",
  skills: [
    {
      category: "Front-end",
      icon: "🎨",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Full-stack",
      icon: "⚙️",
      items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Firebase", "Docker"]
    },
    {
      category: "AI & ML",
      icon: "🧠",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Gemini API", "LangChain"]
    }
  ] as Skill[],
  projects: [
    {
      id: '1',
      title: "Cognify / Eduforge",
      category: "ai",
      img: "cognify.png",
      description: "An AI-integrated personalized learning management system designed to revolutionize traditional education. Features dual roadmaps for structured learning, an AI chatbot mentor for real-time guidance, and an interactive code playground — powered by ML and Diffusion Models for adaptive student experiences.",
      tags: ["Python", "AI/ML", "Diffusion Models", "NLP"],
      liveUrl: "https://cognify.ourspaces.net",
      repoUrl: "https://github.com/rohithsing"
    },
    {
      id: '2',
      title: "Chiron Healthcare Assistant",
      category: "ai",
      img: "Chiron AI.jpeg",
      description: "A comprehensive healthcare assistant focused on medical lab report analysis. Utilizes OCR to extract data from reports and implements a machine learning model to predict Chronic Kidney Disease (CKD) risk, providing AI-generated medical explanations and personalized health recommendations.",
      tags: ["Python", "OCR", "Machine Learning", "NLP"],
      liveUrl: "https://chiron-ai.onrender.com/",
      repoUrl: "https://github.com/rohithsing/Chiron-AI"
    },
    {
      id: '3',
      title: "Personality Assessment System",
      category: "fullstack",
      img: "personality_assessment.png",
      description: "A full-stack web application for automated personality assessment achieving 89.54% test accuracy. Features theory-informed feature engineering with an XGBoost classifier, and SMOTE-augmented datasets for fair and accurate personality profiling.",
      tags: ["Python", "XGBoost", "SMOTE", "Machine Learning"],
      liveUrl: "#",
      repoUrl: "https://github.com/rohithsing"
    },
    {
      id: '4',
      title: "Fake News Detection System",
      category: "ai",
      img: "fakenews.jpeg",
      description: "An AI-based verification system dedicated to identifying and flagging misinformation in digital media. Built with robust NLP models to analyze text patterns and linguistic cues typical of fake news, providing real-time content validation to combat false information.",
      tags: ["Python", "AI", "NLP", "Machine Learning"],
      liveUrl: "#",
      repoUrl: "https://github.com/rohithsing/Fake-News-Detector"
    }
  ] as Project[]
};
