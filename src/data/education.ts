import type { Course, EducationItem } from '../types/content'

export const educationData: EducationItem[] = [
  {
    degree: 'M.Sc. Software Engineering',
    school: 'University of Turku',
    location: 'New York, NY',
    period: '2025 - 2027',
    status: 'In Progress',
    gpa: '3.5 / 5',
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
    degree: 'M.Sc. in Industrial Engineering and Management',
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
    degree: 'B.Sc. in Information Technology',
    school: 'University of Turku',
    location: 'Turku, Finland',
    period: '2022 - 2025',
    status: 'Completed',
    gpa: '4 / 5',
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
