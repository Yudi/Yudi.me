import type { Resume } from "./resume.interface";
export const resumeDataEn: Resume = {
  intro: {
    name: "Renan Yudi Yaguinuma Bersan de Araujo",
    email: "cv (at) yudi.me",
    github: "yudi",
    linkedin: "",
    location: "São Paulo, SP, Brazil",
    website: "https://yudi.me",
  },
  technologies: [
    {
      section: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "C", "C#"],
    },
    {
      section: "Frameworks",
      skills: ["Angular", "Svelte", "Next.js", "NestJS"],
    },
    {
      section: "Game Development",
      skills: ["Unity and Unreal Engine basics"],
    },
    {
      section: "Tools",
      skills: ["Git", "Docker"],
    },
    {
      section: "Others",
      skills: ["Linux", "Firebase", "Cloudflare", "GitHub Actions"],
    },
  ],
  education: [
    {
      school: "Unesp - São Paulo State University",
      degree: "BSc in Computer Science",
      date: "2020 - 2022 (interrupted)",
    },
  ],
  experience: [
    {
      company: "Vunesp - Foundation for the entrance examination for Unesp",
      position: "Proctor",
      date: "2022",
      description: "Proctored several exams. Ensured fairness and security during the exams.",
    },
    {
      company: "Fuvest - Universitary Foundation for the entrance examination for USP",
      position: "Proctor",
      date: "2022",
      description: "Ensured fairness and security during the exams.",
    },
  ],
  projects: [
    {
      title: "FCT App",
      description: "A web app to help students manage events, and certificate generation and distribution.",
      url: "https://yudi.me/projects/fct-app'",
      hidden: false,
    },
  ],
  interests: [
    {
      section: "Languages",
      items: ["Portuguese (native)", "English (fluent)", "Spanish (basic)"],
    },
    {
      section: "Graphics Design",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Sketch", "Figma"],
    },
    {
      section: "3D Modeling",
      items: ["3ds Max", "Mudbox"],
    },
    {
      section: "Video editing",
      items: ["Final Cut Pro", "Adobe Premiere", "Adobe After Effects"],
    },
  ],
  resumeUrl: "https://yudi.me/resume",
};
