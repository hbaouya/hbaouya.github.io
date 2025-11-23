
export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  type: 'Journal' | 'Conference' | 'Workshop' | 'Thesis';
  badges?: string[];
}

export interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  note?: string;
}

export interface TeachingCourse {
  name: string;
  level: string;
}

export interface TeachingExperience {
  institution: string;
  role: string;
  period: string;
  icon: string; // FontAwesome class
  courses: TeachingCourse[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  duration: string;
  funding?: string;
  role?: string;
  url?: string;
}

export interface Activity {
  title: string;
  items: {
    role: string;
    details: string | string[];
    icon: string;
    url?: string;
  }[];
}

export interface ReviewerActivity {
  publisher: string;
  icon: string;
  journals: string[];
}
