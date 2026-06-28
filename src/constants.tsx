
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
  roles: ['AI Engineer', 'Data Scientist', 'Full-stack Developer', 'Front-end Developer'],
  about: "Computer Science undergraduate specializing in AI/ML and Full-Stack Web Development. Proficient in building responsive, scalable applications using ReactJS, .NET Core, and Python. Experienced in designing relational databases, writing optimized queries, and deploying REST APIs — backed by peer-reviewed research published with the IEEE.",
  skills: [
    {
      category: "Languages & Web",
      icon: "🎨",
      items: ["Python", "Java", "C# (.NET)", "JavaScript", "TypeScript", "ReactJS", "Node.js", "HTML5", "CSS3", "jQuery", "REST APIs"]
    },
    {
      category: "Databases & Tools",
      icon: "⚙️",
      items: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL", "Git", "GitHub", "Visual Studio", "Jupyter Notebooks"]
    },
    {
      category: "AI / ML & Data",
      icon: "🧠",
      items: ["Scikit-learn", "NumPy", "Pandas", "SpaCy", "NLTK", "OpenCV", "Matplotlib", "Django"]
    }
  ] as Skill[],
  projects: [
    {
      id: '1',
      title: "Cognify / Eduforge",
      category: "ai",
      img: "cognify.png",
      description: "An AI-integrated personalized learning management system designed to revolutionize traditional education. Features dual roadmaps for structured learning, an AI chatbot mentor for real-time guidance, and an interactive code playground — powered by ML and Diffusion Models for adaptive student experiences.",
      tags: ["ReactJS", ".NET Core", "SQL Server", "Python", "NLP"],
      liveUrl: "https://cognify.ourspaces.net",
      repoUrl: "https://github.com/rohithsing"
    },
    {
      id: '2',
      title: "Chiron Healthcare Assistant",
      category: "ai",
      img: "Chiron AI.jpeg",
      description: "A comprehensive healthcare assistant focused on medical lab report analysis. Utilizes OCR to extract data from reports and implements a machine learning model to predict Chronic Kidney Disease (CKD) risk, providing AI-generated medical explanations and personalized health recommendations.",
      tags: ["ReactJS", ".NET Framework", "SQL Server", "OCR", "NLP"],
      liveUrl: "https://chiron-ai.onrender.com/",
      repoUrl: "https://github.com/rohithsing/Chiron-AI"
    },
    {
      id: '3',
      title: "Personality Assessment System",
      category: "fullstack",
      img: "personality_assessment.png",
      description: "A full-stack web application for automated personality assessment achieving 89.54% test accuracy. Features theory-informed feature engineering with an XGBoost classifier, and SMOTE-augmented datasets for fair and accurate personality profiling.",
      tags: ["Python", "XGBoost", "SMOTE", "IEEE Published"],
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
