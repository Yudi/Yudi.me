export type SafeLanguage = "en" | "pt";
export interface Resume {
  intro: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
    lattes: string;
    location: {
      en: string;
      pt: string;
    };
    website: string;
  };
  technologies: {
    key: string;
    section: {
      en: string;
      pt: string;
    };
    skills:
      | string[]
      | {
          en: string;
          pt: string;
        };
    hidden: boolean;
  }[];
  education: {
    key: string;
    school: {
      en: string;
      pt: string;
    };
    degree: {
      en: string;
      pt: string;
    };
    average?: {
      en: string;
      pt: string;
    };
    gpa?: {
      en: string;
      pt: string;
    };
    date:
      | {
          en: string;
          pt: string;
        }
      | string;
    hidden: boolean;
  }[];
  experience: {
    key: string;
    company: {
      en: string;
      pt: string;
    };
    position: {
      en: string;
      pt: string;
    };
    date:
      | {
          en: string;
          pt: string;
        }
      | string;
    description: {
      en: string[];
      pt: string[];
    };
    hidden: boolean;
  }[];
  projects: {
    key: string;
    title:
      | {
          en: string;
          pt: string;
        }
      | string;
    description: {
      en: string;
      pt: string;
    };
    url: string;
    hidden: boolean;
  }[];
  interests: {
    key: string;
    section: {
      en: string;
      pt: string;
    };
    items:
      | string[]
      | {
          en: string[];
          pt: string[];
        };
    hidden: boolean;
  }[];
  academicLife: {
    projects: {
      key: string;
      title: {
        en: string;
        pt: string;
      };
      description: {
        en: string;
        pt: string;
      };
      url?: string;
      hidden: boolean;
    }[];
    extension: {
      key: string;
      title: {
        en: string;
        pt: string;
      };
      description: {
        en: string;
        pt: string;
      };
      date: string;
      institution: {
        en: string;
        pt: string;
      };
      hidden: boolean;
    }[];
    organizations: {
      key: string;
      name: {
        en: string;
        pt: string;
      };
      position: {
        en: string;
        pt: string;
      };
      date: string;
      description: {
        en: string;
        pt: string;
      };
      hidden: boolean;
    }[];
    events: {
      key: string;
      title: {
        en: string;
        pt: string;
      };
      description: {
        en: string;
        pt: string;
      };
      date: string;
      institution: {
        en: string;
        pt: string;
      };
      hidden: boolean;
    }[];
    speeches: {
      key: string;
      title: {
        en: string;
        pt: string;
      };
      description: {
        en: string;
        pt: string;
      };
      date: string;
      institution: {
        en: string;
        pt: string;
      };
      hidden: boolean;
    }[];
    competitions: {
      key: string;
    }[];
    publications: {
      key: string;
    }[];
  };

  resumeUrl: string;
}
