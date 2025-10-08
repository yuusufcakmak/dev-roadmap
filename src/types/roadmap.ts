export interface CodeExample {
  id: string;
  title: string;
  code: string;
  language: string;
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  url: string;
  type: "documentation" | "video" | "tutorial" | "article";
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExamples: CodeExample[];
  relatedProjects: string[];
  resources: Resource[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  topics: Topic[];
}

export interface Level {
  id: string;
  name: string;
  order: number;
  description: string;
  categories: Category[];
}
