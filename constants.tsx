
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
  roles: ['AI Engineer', 'Front-end Developer', 'Full-stack Developer'],
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
      title: "Fake News Detector",
      category: "ai",
      img: "fakenews.jpeg",
      description: "This AI legend uses real-time web grounding to fact-check headlines instantly. No cap, it snatches truth from the chaos, citing credible sources so you’re never caught lacking today.",
      tags: ["Gemini AI", "React", "TypeScript"],
      liveUrl: "https://rohithsfakenewsdetector.netlify.app/",
      repoUrl: "https://github.com/rohithsing/Fake-News-Detector"
    },
    {
      id: '2',
      title: "Real-time SaaS Dashboard",
      category: "fullstack",
      img: "https://picsum.photos/seed/saas/800/600",
      description: "Built a complete social media application with real-time chat, notifications, and user authentication.",
      tags: ["React", "Node.js", "WebSockets"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: '3',
      title: "Intelligent Data Visualization",
      category: "frontend",
      img: "https://picsum.photos/seed/viz/800/600",
      description: "Responsive dashboard for analyzing financial data, built with React and D3.js for complex animations.",
      tags: ["React", "D3.js", "TypeScript"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: '4',
      title: "Chiron-AI",
      category: "ai",
      img: "Chiron AI.jpeg",
      description: "Chiron AI, a full-stack healthcare assistant that leverages artificial intelligence to deliver personalized medical insights and improve medication safety. Our goal was to make reliable healthcare information more accessible from the comfort of home.",
      tags: ["Python", "FastAPI", "Groq-API"],
      liveUrl: "https://chiron-ai.onrender.com/",
      repoUrl: "https://github.com/rohithsing/Chiron-AI"
    }
  ] as Project[]
};
