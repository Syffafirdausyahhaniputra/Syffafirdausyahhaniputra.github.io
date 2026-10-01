import type {
  ContactInfo,
  EducationItem,
  ExperienceItem,
  FocusArea,
  Project,
  SkillCategory,
  SocialLink,
} from '../types/portfolio'

export const profile = {
  name: 'Syffa Firdausyah Hani Putra',
  label: 'Fresh Graduate · Information Technology Developer',
  headline: 'Desktop & Web Development',
  summary:
    'Fresh graduate in Information Technology with a focus on desktop and web development. I build practical software solutions through application development, database integration, API integration, and system-oriented problem solving.',
  cvLink: 'https://drive.google.com/file/d/1-dM2Vzb_WjnCFbpsXXn7fwWAvD_wpsPz/view?usp=sharing',
  emphasis: [
    'Desktop Development',
    'Web Development',
    'Database & API',
    'Mobile Development',
  ],
}

export const focusAreas: FocusArea[] = [
  {
    title: 'Desktop Development',
    description:
      'Building practical desktop applications with C#, .NET, WPF, and structured system-oriented development workflows.',
    stack: ['C#', '.NET', 'WPF', 'Desktop App', 'System Logic'],
  },
  {
    title: 'Web Development',
    description:
      'Creating responsive web solutions using PHP, Laravel, HTML, CSS, JavaScript, and MySQL for real application needs.',
    stack: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'REST API'],
  },
  {
    title: 'Application Integration',
    description:
      'Connecting application layers through database integration, REST API communication, and practical system development.',
    stack: ['Database Integration', 'REST API', 'Web/Mobile Integration', 'System Development'],
  },
]

export const skills: SkillCategory[] = [
  {
    title: 'Core Development',
    items: ['C#', '.NET', 'WPF', 'PHP', 'Laravel', 'Flutter'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Database & API',
    items: ['MySQL', 'REST API', 'Postman'],
  },
  {
    title: 'Development Tools',
    items: ['Visual Studio', 'Visual Studio Code', 'Android Studio', 'GitHub'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Canva'],
  },
  {
    title: 'Supporting',
    items: ['Microsoft Excel'],
  },
]

export const projects: Project[] = [
  {
    title: 'Secure CBT',
    category: 'Desktop Application · Thesis Project',
    summary:
      'Desktop CBT application with kiosk mode, selected system control mechanisms, and process monitoring implemented as part of a controlled examination workflow.',
    purpose:
      'A desktop-based Computer-Based Testing application developed to support a controlled examination workflow.',
    contribution:
      'Designed and implemented the desktop application structure, exam flow, database connection, and operational monitoring features in the thesis project.',
    stack: ['C#', '.NET 8', 'WPF', 'MySQL'],
    platform: 'Desktop application',
    features: [
      'Kiosk Mode',
      'Keyboard Hook / System Hooking',
      'System Process Monitoring',
      'Exam Engine',
      'Exam Timer',
      'Question Navigation',
      'Database integration',
      'Security Testing',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Syffafirdausyahhaniputra/CBTSecureDesktop.git',
      },
    ],
  },
  {
    title: 'JTI Certify',
    category: 'Web & Mobile Application',
    summary:
      'An integrated ecosystem combining a web application, REST API, and Flutter-based mobile application to support program and data connectivity.',
    purpose:
      'A combined web and mobile solution developed to support connected application workflows and data access between platforms.',
    contribution:
      'Contributed to the web application, API development, database integration, and mobile application connectivity within the project ecosystem.',
    stack: ['PHP', 'Laravel', 'MySQL', 'REST API', 'Flutter', 'Android Studio'],
    platform: 'Web + mobile application',
    features: [
      'Web application',
      'Mobile application',
      'REST API integration',
      'Database connection',
      'System integration',
      'Application data flow',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Syffafirdausyahhaniputra/PBL_SEM_5.git',
      },
    ],
  },
  {
    title: 'Customer Satisfaction Survey',
    category: 'Web Application',
    summary:
      'Web-based survey system used at Polinema to collect stakeholder and customer feedback for evaluation and performance improvement.',
    purpose:
      'A web-based system to gather feedback and support evaluation activities for stakeholder and customer satisfaction.',
    contribution:
      'Developed and contributed to the web-based survey process with a focus on data collection and feedback workflow.',
    stack: ['Web Development', 'PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    platform: 'Web application',
    features: [
      'Customer satisfaction survey',
      'Stakeholder feedback collection',
      'Evaluation support',
      'Performance improvement input',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Syffafirdausyahhaniputra/surveypolinema.git',
      },
    ],
  },
]

export const experience: ExperienceItem[] = [
  {
    title: 'Web Developer Intern',
    organization: 'CV Harsyad Utama',
    period: 'Agustus 2025 – Desember 2025',
    responsibilities: [
      'Develop and maintain web application features in accordance with system requirements.',
      'Perform debugging and troubleshooting to identify and fix application issues.',
      'Build dashboard and backend features to support system operational needs.',
      'Collaborate with mentors and teams during the development, testing, and implementation processes.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Politeknik Negeri Malang',
    program: 'Business Information Systems',
    status: 'Graduated / Fresh Graduate',
    graduationYear: '2026',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Syffafirdausyahhaniputra', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syffa-firdausyah-hani-putra-9616a1252/', icon: 'IN' },
  { label: 'Instagram', href: 'https://instagram.com/_syfmnwka', icon: 'IG' },
  { label: 'YouTube', href: 'https://www.youtube.com/@syffafirdausyahhaniputra528', icon: 'YT' },
]

export const contact: ContactInfo = {
  email: 'syffafirdausyahhaniputra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/syffa-firdausyah-hani-putra-9616a1252/',
  github: 'https://github.com/Syffafirdausyahhaniputra',
  instagram: 'https://instagram.com/_syfmnwka',
  youtube: 'https://www.youtube.com/@syffafirdausyahhaniputra528',
}
