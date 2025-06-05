import type { ResumeData } from "./resume.interface";
export const resumeData: ResumeData = {
  intro: {
    name: "Renan Yudi Yaguinuma Bersan de Araujo",
    email: "cv@yudi.me",
    github: "yudi",
    linkedin: "renanyudi",
    lattes: "3507649024960199",
    location: { en: "São Paulo, SP, Brazil", pt: "São Paulo - SP, Brasil" },
    website: "https://yudi.me",
  },
  technologies: [
    {
      key: "programming-languages",
      section: {
        en: "Languages",
        pt: "Linguagens",
      },
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "C", "C#"],
      hidden: false,
    },
    {
      key: "frameworks",
      section: {
        en: "Frameworks",
        pt: "Frameworks",
      },
      skills: ["Angular", "Svelte", "Astro", "Next.js", "NestJS"],
      hidden: false,
    },
    {
      key: "devops-infra",
      section: {
        en: "DevOps, Cloud and Infrastructure",
        pt: "DevOps, Cloud e Infraestrutura",
      },
      skills: ["Github Actions", "Cloudflare", "Firebase", "Traefik"],
      hidden: false,
    },
    {
      key: "tech-tools",
      section: {
        en: "Tools",
        pt: "Ferramentas",
      },
      skills: ["Git", "Docker", "Regex", "Bash", "Zsh"],
      hidden: false,
    },
    {
      key: "game-development",
      section: {
        en: "Game Development",
        pt: "Desenvolvimento de jogos",
      },
      skills: {
        en: "Unity and Unreal Engine basics",
        pt: "Conceitos básicos de Unity e Unreal Engine",
      },
      hidden: true,
    },
    {
      key: "tech-others",
      section: {
        en: "Others",
        pt: "Outros",
      },
      skills: ["Linux", "macOS"],
      hidden: true,
    },
  ],
  education: [
    {
      key: "unesp-computer-science",
      school: {
        en: "Unesp - São Paulo State University",
        pt: "Unesp - Universidade Estadual Paulista",
      },
      degree: {
        en: "BSc of Computer Science",
        pt: "Bacharelado em Ciência da Computação",
      },
      date: {
        en: "2020 - 2022 (interrupted)",
        pt: "2020 - 2022 (interrompido)",
      },
      average: {
        en: "9.06/10",
        pt: "9,06/10",
      },
      gpa: {
        en: "3.62",
        pt: "9,04/10",
      },
      hidden: false,
    },
  ],
  experience: [
    {
      key: "vunesp-2022",
      company: {
        en: "Vunesp - Foundation for the admission examination for Unesp",
        pt: "Vunesp - Fundação para o vestibular da Unesp",
      },
      position: {
        en: "Proctor",
        pt: "Fiscal de sala",
      },
      date: "2022",
      description: {
        en: [
          "Proctored several exams. Ensured fairness and security during the exams.",
        ],
        pt: [
          "Assegurei a lisura e segurança durante provas e concursos, como o vestibular da Unesp, o SARESP e ingresso para as Polícias Civil e Militar.",
          "Cumprimento de processos padronizados.",
        ],
      },
      hidden: false,
    },
    {
      key: "fuvest-2022",
      company: {
        en: "Fuvest - Universitary Foundation for the admission examination for USP",
        pt: "Fuvest - Fundação Universitária para o vestibular da USP",
      },
      position: {
        en: "Proctor",
        pt: "Fiscal de sala",
      },
      date: "2022",
      description: {
        en: ["Ensured fairness and security during the exam."],
        pt: [
          "Assegurei a lisura e a segurança do vestibular da USP.",
          "Cumprimento de processos padronizados.",
        ],
      },
      hidden: false,
    },
  ],
  projects: [
    {
      key: "fct-app",
      title: "FCT App",
      description: {
        en: "A web app to help students manage events, and certificate generation and distribution.",
        pt: "Um aplicativo web para ajudar alunos a gerenciar eventos, e geração e distribuição de certificados.",
      },
      url: "https://yudi.me/projects/fct-app",
      hidden: false,
    },
    {
      key: "cacic-homepage",
      title: {
        en: "CACiC Homepage",
        pt: "Página do CACiC",
      },
      description: {
        en: "A website with operational documentation for the student council of the Computer Science course at Unesp.",
        pt: "Um site com documentação operacional para o centro acadêmico do curso de Ciência da Computação da Unesp.",
      },
      url: "https://cacic.dev.br",
      hidden: true,
    },
    {
      key: "criminality-map",
      title: {
        en: "Criminality Map",
        pt: "Mapa da Criminalidade",
      },
      description: {
        en: "A web app to visualize criminality data in São Paulo.",
        pt: "Um aplicativo web para visualizar dados de criminalidade em São Paulo.",
      },
      url: "https://criminalidade.yudi.com.br",
      hidden: false,
    },
    {
      key: "more-projects",
      title: {
        en: "More projects",
        pt: "Mais projetos",
      },
      description: {
        en: "Check out my GitHub for more projects.",
        pt: "Confira meu GitHub para mais projetos.",
      },
      url: "https://github.com/yudi",
      hidden: false,
    },
  ],
  interests: [
    {
      key: "languages",
      section: {
        en: "Languages",
        pt: "Idiomas",
      },
      items: {
        en: ["Portuguese (native)", "English (fluent)", "Spanish (basic)"],
        pt: ["Português", "Inglês (fluente)", "Espanhol (básico)"],
      },
      hidden: false,
    },
    {
      key: "graphics-design",
      section: { en: "Graphics Design", pt: "Design gráfico" },
      items: ["Adobe Photoshop", "Adobe Illustrator", "Sketch", "Figma"],
      hidden: true,
    },
    {
      key: "3d-modeling",
      section: { en: "3D Modeling", pt: "Modelagem 3D" },
      items: ["3ds Max", "Mudbox"],
      hidden: true,
    },
    {
      key: "video-editing",
      section: { en: "Video editing", pt: "Edição de vídeo" },
      items: ["Final Cut Pro", "Adobe Premiere", "Adobe After Effects"],
      hidden: true,
    },
  ],
  academicLife: {
    hidden: true,
    projects: [
      {
        key: "daqui-pra-la-ciencia",
        title: {
          en: "From here to there science",
          pt: "Daqui pra lá ciência",
        },
        description: {
          en: "Production of scientific dissemination didactic material for use in teaching.",
          pt: "Produção de material didático de divulgação científica para uso do Núcleo de Ensino",
        },
        date: "2021",
        url: "https://youtube.com/playlist?list=PLQGXle-q_3AMN2eo59CCSnpq5lKuiX-Qo",
        hidden: true,
      },
      {
        key: "nanotech-semana-nacional",
        title: {
          en: "Content about Nanotechnology",
          pt: "Conteúdo sobre nanotecnologia",
        },
        description: {
          en: "Video creation for the 17th National Science and Technology Week",
          pt: "Produção de vídeos para a 17ª Semana Nacional de Ciência e Tecnologia",
        },
        date: "2020",
        url: "https://youtube.com/playlist?list=PLQGXle-q_3ANeWbZBuYQ6gQkM92OwBdZr",
        hidden: true,
      },
    ],
    extension: [
      {
        key: "ciencia-em-rede",
        title: {
          en: "Science in Network",
          pt: "Ciência em Rede",
        },
        description: {
          en: "An initiative to open a discussion using digital/virtual means between undergraduates and the general population, training them to act in scientific dissemination, bringing scientific terms and knowledge closer to the general population, especially high school students.",
          pt: "Uma iniciativa para abrir uma discussão usando meios digitais/virtuais entre os graduandos e a população em geral, capacitando-os para atuar na divulgação científica, aproximando os termos e conhecimentos científicos da população em geral, principalmente alunos do Ensino Médio.",
        },
        date: "2021 - 2022",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
    ],
    organizations: [
      {
        key: "cacic-council",
        name: {
          en: "CACiC - Computer Science Students' Council",
          pt: "CACiC - Centro Acadêmico de Ciência da Computação",
        },
        position: {
          en: "Vice-president and member",
          pt: "Vice-presidente e membro",
        },
        date: "2021 - 2022",
        description: {
          en: "I contributed to the organization of events and activities, student representation, promoting discussions on relevant topics for the academic community, and also in the development and execution of various projects",
          pt: "Contribuí para a organização de eventos e atividades, representação estudantil, a promoção de discussões sobre temas relevantes para a comunidade acadêmica e, também, na elaboração e execução de projetos diversos",
        },
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
    ],
    events: [
      {
        key: "secompp24",
        title: {
          en: "SECOMPP24 - Computer Science Students' Week",
          pt: "SECOMPP24 - Semana da Computação da FCT-Unesp",
        },
        description: {
          en: "A week-long event with lectures, courses, and activities for Computer Science students.\nMaintained the website and the event's subscriptions system.",
          pt: "Um evento de uma semana com palestras, minicursos e atividades para alunos de Ciência da Computação.\nMantive o site e o sistema de inscrições do evento.",
        },
        date: "2024",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
      {
        key: "secompp23",
        title: {
          en: "SECOMPP23 - Computer Science Students' Week",
          pt: "SECOMPP23 - Semana da Computação da FCT-Unesp",
        },
        description: {
          en: "Mantained the website and the event's subscriptions system, and managed payments.",
          pt: "Mantive o site e o sistema de inscrições do evento e gerenciei pagamentos.",
        },
        date: "2023",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
      {
        key: "secompp22",
        title: {
          en: "SECOMPP22 - Computer Science Students' Week",
          pt: "SECOMPP22 - Semana da Computação da FCT-Unesp",
        },
        description: {
          en: "I was responsible for the website, the subscriptions system, payment management, rebranding, and marketing.",
          pt: "Fui responsável pelo site, sistema de inscrições, gerenciamento de pagamentos, redesenho da marca e marketing.",
        },
        date: "2022",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
    ],
    speeches: [
      {
        key: "graphic-design-fundamentals-2024",
        title: {
          en: "Graphic Design Fundamentals",
          pt: "Fundamentos do design gráfico",
        },
        description: {
          en: "A lecture for Computer Science students about the fundamentals of graphic design, including color theory, typography, composition, and image formats.",
          pt: "Palestra voltada a alunos do curso de Ciência da Computação sobre os fundamentos do design gráfico, incluindo teoria das cores, tipografia, composição e formatos de imagens.",
        },
        date: "2024",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
      {
        key: "introduction-to-programming-2021",
        title: {
          en: "Introduction to Programming and Computational Thinking",
          pt: "Introdução à programação e ao pensamento computacional",
        },
        description: {
          en: "A lecture for Computer Science freshmen about the fundamentals of programming and computational thinking, including examples of algorithms and practical projects in Scratch.",
          pt: "Palestra voltada aos calouros do curso de Ciência da Computação sobre os fundamentos da programação e do pensamento computacional, incluindo exemplos de algoritmos e projetos práticos no Scratch.",
        },
        date: "2021",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
      {
        key: "from-zero-to-git-2021",
        title: {
          en: "From zero to git",
          pt: "Do zero ao git",
        },
        description: {
          en: "An introductory lecture on version control systems, focusing on Git and GitHub, covering basic concepts, commands, and best practices with practical examples",
          pt: "Uma palestra introdutória sobre sistemas de controle de versão, com foco no Git e GitHub, abordando conceitos básicos, comandos e boas práticas, com exemplos práticos",
        },
        date: "2021",
        institution: {
          en: "Unesp - São Paulo State University",
          pt: "Unesp - Universidade Estadual Paulista",
        },
        hidden: true,
      },
    ],
    competitions: [],
    publications: [],
  },
  resumeUrl: "https://yudi.me/resume",
};
