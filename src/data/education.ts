import type { Course, EducationItem } from '../types/content'

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Tech University',
    location: 'New York, NY',
    period: '2022 - 2026',
    status: 'In Progress',
    gpa: '3.8/4.0',
    description:
      'Focused on software development, database management, and system analysis.',
    courses: [
      {
        name: 'Data Structures',
        link: 'https://en.wikipedia.org/wiki/Data_structure',
      },
      {
        name: 'Software Engineering',
        link: 'https://en.wikipedia.org/wiki/Software_engineering',
      },
      {
        name: 'Database Systems',
        link: 'https://en.wikipedia.org/wiki/Database',
      },
      {
        name: 'Web Development',
        link: 'https://developer.mozilla.org/docs/Learn',
      },
    ] as Course[],
  },
  {
    degree: 'Bachelor of Science in Industrial Engineering',
    school: 'Engineering Institute',
    location: 'Boston, MA',
    period: '2022 - 2026',
    status: 'In Progress',
    gpa: '3.7/4.0',
    description:
      'Specializing in process optimization, quality control, and project management.',
    courses: [
      {
        name: 'Operations Research',
        link: 'https://en.wikipedia.org/wiki/Operations_research',
      },
      {
        name: 'Quality Management',
        link: 'https://en.wikipedia.org/wiki/Quality_management',
      },
      {
        name: 'Supply Chain',
        link: 'https://en.wikipedia.org/wiki/Supply_chain_management',
      },
      {
        name: 'Statistics',
        link: 'https://en.wikipedia.org/wiki/Statistics',
      },
    ] as Course[],
  },
  {
    degree: 'Bachelor of Science Information Technology',
    school: 'Tech University',
    location: 'New York, NY',
    period: '2022 - 2026',
    status: 'In Progress',
    gpa: '3.8/4.0',
    description:
      'Focused on software development, database management, and system analysis.',
    courses: [
      {
        name: 'Data Structures',
        link: 'https://en.wikipedia.org/wiki/Data_structure',
      },
      {
        name: 'Software Engineering',
        link: 'https://en.wikipedia.org/wiki/Software_engineering',
      },
      {
        name: 'Database Systems',
        link: 'https://en.wikipedia.org/wiki/Database',
      },
      {
        name: 'Web Development',
        link: 'https://developer.mozilla.org/docs/Learn',
      },
    ] as Course[],
  },
]
