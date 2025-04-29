export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormState {
  values: ContactFormData;
  errors: Partial<ContactFormData>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}