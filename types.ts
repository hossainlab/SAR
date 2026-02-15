
export interface Module {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: string;
  content: string;
  codeExample: string;
  category: 'Fundamentals of R' | 'Data Manipulation with R' | 'Publication-ready Tables with R' | 'Visualization';
}

export interface Cheatsheet {
  id: string;
  title: string;
  description: string;
  filename: string;
  category: string;
}

// Added ChatMessage interface to fix the module export error in AITutor.tsx
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
