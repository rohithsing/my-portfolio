
export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'ai';
  img: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
