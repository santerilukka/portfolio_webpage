export type WorkItem = {
  title: string
  description: string
  stack: string[]
  status?: string
}

export const items: WorkItem[] = [
  {
    title: 'Personal Portfolio Refresh',
    description:
      'Improving performance, adding accessibility audits, and refining UI components.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'In Progress',
  },
  {
    title: 'API Experimentation Sandbox',
    description:
      'Building a small playground to explore data visualization integrations.',
    stack: ['FastAPI', 'Recharts', 'PostgreSQL'],
  },
  {
    title: 'Learning Path',
    description:
      'Deepening knowledge in full‑stack patterns and cloud deployment workflows.',
    stack: ['AWS', 'Docker', 'CI/CD'],
  },
]
