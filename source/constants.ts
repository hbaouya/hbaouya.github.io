
import { Publication, Talk, TeachingExperience, Project, Activity, ReviewerActivity } from './types';

export const PUBLICATIONS: Publication[] = [
  {
    id: 'j11',
    title: 'Model-based dependability and performance analysis for satellite systems with collaborative maintenance maneuvers via stochastic games',
    authors: 'Baouya Abdelhakim, Hamid Brahim, Otmane Ait Mohamed, & Bensalem Saddek',
    venue: 'Elsevier Journal of Systems and Software, Impact factor: 4.4.',
    date: 'Jan 2026',
    type: 'Journal',
  },
  {
    id: 'j10',
    title: 'Verification and Simulation: Detection and Mitigation of Clock Deviation',
    authors: 'Baouya Abdelhakim, Hamid Brahim, Otmane Ait Mohamed, & Bensalem Saddek',
    venue: 'Elsevier Ad Hoc Networks, Impact factor: 4.4. ',
    date: 'Mar 2025',
    type: 'Journal',
  },
  {
    id: 'j9',
    title: 'Modeling and Analysis of Data Corruption Attacks and Energy Consumption Effects on Edge Servers using Concurrent Stochastic Games',
    authors: 'Baouya Abdelhakim, Hamid Brahim, Gürgen Levent, & Bensalem Saddek',
    venue: 'Springer Soft Computing, Impact factor: 3.1. ',
    date: 'Jan 2025',
    type: 'Journal',
  },
  {
    id: 'j8',
    title: 'Rigorous Security Analysis of RabbitMQ Broker with Concurrent Stochastic Games',
    authors: 'Baouya Abdelhakim, Hamid Brahim, Gürgen Levent, & Bensalem Saddek',
    venue: 'Elsevier Internet of Things, Impact factor: 5.9.',
    date: 'Jun 2024',
    type: 'Journal',
  },
  {
    id: 'j7',
    title: 'Deploying warehouse robots with confidence: The BRAIN-IoT framework’s functional assurance',
    authors: 'Baouya Abdelhakim, Chehida S., Bensalem S., et al.',
    venue: 'The Journal of Supercomputing, Springer, Impact factor: 2.557.',
    date: 'Jun 2022',
    type: 'Journal',
  },
  {
    id: 'c11',
    title: 'Model-Based Reliability, Availability, and Maintainability Analysis for Satellite Systems with Collaborative Maneuvers via Stochastic Games',
    authors: 'Baouya Abdelhakim, Hamid Brahim, Otmane Ait Mohamed, & Bensalem Saddek',
    venue: 'The 50th Euromicro Conference Series on Software Engineering and Advanced Applications (SEAA 2024)',
    date: 'Aug 2024',
    type: 'Conference',
  },
  {
    id: 'c10',
    title: 'Formal Modelling and Security Analysis of Inter-Operable Systems',
    authors: 'Baouya Abdelhakim, Ouchani Samir & Bensalem Saddek',
    venue: 'IEA/AIE, 35th Int. Conf. on Industrial, Engineering & Other Applications of Applied Intelligent Systems, JAPAN',
    date: 'Jan 2022',
    type: 'Conference',
  },
  {
    id: 'w1',
    title: 'Model Based Methodology and Framework for Design and Management of Next-Gen IoT Systems',
    authors: 'Xu Tao et al., including Baouya Abdelhakim',
    venue: 'Eclipse SAM IoT 2020 Conference',
    date: '2020',
    type: 'Workshop',
    badges: ['Best Paper Award'],
  },
  {
    id: 't1',
    title: 'Design of Embedded Systems Based on The Concept of Software Architecture',
    authors: 'Baouya Abdelhakim',
    venue: 'University of Blida, Algeria',
    date: 'Apr 2016',
    type: 'Thesis',
  },
];

export const TALKS: Talk[] = [
  {
    id: 't5',
    title: 'Rigorous Design of Component-based Architecture: Research Activities',
    event: 'Invited Talk',
    location: 'ECE Department, Concordia University, Montreal, Canada',
    date: '2023',
    note: 'Univ. Toulouse/IRIT'
  },
  {
    id: 't1',
    title: 'Artificial Intelligence meets Formal Methods: Generation and verification of learned stochastic automata',
    event: '3rd Summer School on Cyber-Physical Systems and Internet of Things',
    location: 'Budva, Montenegro',
    date: 'June 08-12, 2022',
    note: 'Univ. Grenoble-Alpes, FR',
  },
  {
    id: 't2',
    title: "Design and verification of collaborative robot's system",
    event: '2nd Summer School on Cyber-Physical Systems and Internet of Things',
    location: 'Budva, Montenegro',
    date: 'June 08-12, 2021',
    note: 'Univ. Grenoble-Alpes, FR. (With Chehida, Salim)',
  },
  {
    id: 't3',
    title: 'Safety analysis and code synthesis of a train control system based on a model-driven design methodology',
    event: 'Invited Talk',
    location: 'Concordia University, Montréal, Canada',
    date: 'August 2018',
  },
];

export const TEACHING: TeachingExperience[] = [
  {
    institution: 'University of Toulouse - UT2',
    role: 'Current Position',
    period: '',
    icon: 'fas fa-university',
    courses: [
        { name: 'Algorithms and Programming', level: 'L1' },
        { name: 'Algorithms and Programming', level: 'L2' },
        { name: 'Human-Machine Interaction', level: 'L2' },
        { name: 'Introduction to Computer Science', level: 'L2' },
        { name: 'Software Verification', level: 'L3' },
        { name: 'Software Validation', level: 'M1' }
    ]
  },
  {
    institution: 'University of Grenoble Alpes',
    role: '2018 - 2022',
    period: '2018 - 2022',
    icon: 'fas fa-mountain',
    courses: [
        { name: 'Algorithms and Programming', level: 'L1' }
    ]
  },
  {
    institution: 'University of Blida',
    role: '2016 - 2018',
    period: '2016 - 2018',
    icon: 'fas fa-shield-alt',
    courses: [
        { name: 'IT Security', level: 'M1' },
        { name: 'Networking', level: 'M1' },
        { name: 'Software Architecture', level: 'M2' },
        { name: 'Cyber-Security', level: 'M2' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'HERMES-Design',
    description: 'Human-Centric Collaborative Architectural Decision-Making for Secure System Design. Supported by ICO.',
    duration: '2023 - 2025',
    funding: '15 k€',
    role: 'Leader',
    url: 'https://hermes-design.github.io/'
  },
  {
    id: 'p2',
    name: 'ACIS-IoT',
    description: 'Safety and Security Assurance for Critical IoT Systems. National project supported by CNRS-IRIT.',
    duration: '2023 - 2024',
    funding: '12.3 k€',
    role: 'Leader',
    url: 'https://acis-iot.github.io/'
  },
  {
    id: 'p3',
    name: 'CPS4EU',
    description: 'Cyber-Physical Systems for Europe. Technical Manager.',
    duration: 'Since Mar 2020',
    role: 'Assistant'
  },
  {
    id: 'p4',
    name: 'BRAIN-IoT',
    description: 'H2020. Model-Based Framework for dependable sensing and actuation in decentralized IoT systems. Technical Manager.',
    duration: 'Oct 2018 - Mar 2021',
    role: 'Assistant'
  }
];

export const ACTIVITIES: Activity = {
  title: 'Committees & Editorial Boards',
  items: [
    {
      role: 'Member & Web Developer',
      details: 'GT ICO (Groupe de travail Facteur Humain & Cybersécurité)',
      icon: 'fas fa-globe',
      url: 'https://gtico.github.io/'
    },
    {
      role: 'Program Committee Member',
      details: [
        '20th Int. Conf. on Risks and Security of Internet and Systems (CRISIS 2025), Gatineau, Canada.',
        '19th Int. Conf. on Risks and Security of Internet and Systems (CRISIS 2024), Aix-en-Provence, France.'
      ],
      icon: 'fas fa-users'
    },
    {
      role: 'Editorial Board Member',
      details: 'Elsevier Journal of Microprocessors and Microsystems (Since Sep 2023).',
      icon: 'fas fa-pen-nib'
    },
    {
      role: 'PC Chair',
      details: 'The Smart Cyber-Physical Systems Symposium (SCPS 2021), Leuven, Belgium.',
      icon: 'fas fa-gavel'
    },
    {
      role: 'Steering Committee',
      details: [
        'Symposium on Intelligent and Autonomous Systems (SIAS 2021), Tallinn, Estonia.',
        'Symposium on Solutions for Smart Cities Challenges (SSCC 2020), Paris, France.',
        'IFIP CIIA 2018, Oran, Algeria.'
      ],
      icon: 'fas fa-compass'
    }
  ]
};

export const REVIEWER_ACTIVITIES: ReviewerActivity[] = [
  {
    publisher: 'ACM & IEEE',
    icon: 'fas fa-book-open',
    journals: [
      'ACM Distributed Ledger Technologies: Research and Practice',
      'IEEE The Journal of Internet of Things'
    ]
  },
  {
    publisher: 'Springer',
    icon: 'fas fa-book-open',
    journals: [
      'Journal of Automotive Engineering',
      'Applied Intelligence',
      'Journal of Automotive Innovation',
      'Journal of Supercomputing',
      'Journal of Soft Computing'
    ]
  },
  {
    publisher: 'Elsevier',
    icon: 'fas fa-book-open',
    journals: [
      'Journal of Expert Systems With Applications',
      'Internet of Things',
      'Computer Standards and Interfaces'
    ]
  }
];
