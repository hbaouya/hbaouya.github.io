
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

export interface ActivityItem {
  role: string;
  details: string[];
  icon: string;
  url?: string;
}

export interface Activity {
  title: string;
  items: ActivityItem[];
  reviewers?: ReviewerActivity[];
}

export interface ReviewerActivity {
  publisher: string;
  icon: string;
  journals: string[];
}

export interface ProfileEmail {
  email: string;
  title: string;
}

export interface ProfileLinks {
  scholar?: string;
  linkedin?: string;
  github?: string;
  researchgate?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  image: string;
  emails: ProfileEmail[];
  location: string;
  socials: ProfileLinks;
  managementRole?: {
    title: string;
    institution: string;
    period: string;
    description: string;
  };
}

export interface BiographyInterest {
  name: string;
  icon: string;
}

export interface ResearchPillar {
  title: string;
  icon: string;
  description: string;
}

export interface BiographyInfo {
  paragraphs: string[];
  interests: BiographyInterest[];
  focusAreas?: string[];
  pillars?: ResearchPillar[];
}

export interface NewsItem {
  month: string;
  year: string;
  text: string;
  link?: string;
  linkText?: string;
}

export interface InterviewQuestion {
  question: string;
  answer: string;
}

export interface InterviewAtGlance {
  label: string;
  value: string;
}

export interface InterviewSchema {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  quote: string;
  image?: string;
  intro: string;
  questions: InterviewQuestion[];
  at_a_glance: InterviewAtGlance[];
}

export interface ProfileDataSchema {
  profile: ProfileInfo;
  biography: BiographyInfo;
  news: NewsItem[];
  publications: Publication[];
  talks: Talk[];
  teaching: TeachingExperience[];
  projects: Project[];
  activities: Activity;
  interviews: InterviewSchema[];
}
