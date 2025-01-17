export interface Resume {
  intro: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
    website: string;
  };
  technologies: {
    section: string;
    skills: string[];
  }[];
  education: {
    school: string;
    degree: string;
    date: string;
  }[];
  experience: {
    company: string;
    position: string;
    date: string;
    description: string;
  }[];
  projects: {
    title: string;
    description: string;
    url: string;
    hidden: boolean;
  }[];
  interests: {
    section: string;
    items: string[];
  }[];
  resumeUrl: string;
}
