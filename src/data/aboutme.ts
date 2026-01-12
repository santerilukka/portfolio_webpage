import type { LucideIcon } from 'lucide-react'
import { User, Target, Lightbulb } from 'lucide-react'

export type AboutHighlight = {
  icon: LucideIcon
  title: string
  description: string
}

export const aboutIntro = {
  title: 'About Me',
  description:
    "I'm a dedicated student pursuing IT and Industrial Engineering, with a strong foundation in technology and a drive to create impactful solutions. My journey combines technical expertise with creative problem-solving to build meaningful digital experiences.",
}

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: User,
    title: 'Background',
    description:
      'IT & Industrial Engineering student with a passion for technology and innovation',
  },
  {
    icon: Target,
    title: 'Focus Areas',
    description:
      'Full-stack development, system optimization, and user experience design',
  },
  {
    icon: Lightbulb,
    title: 'Approach',
    description:
      'Problem-solving mindset with attention to detail and clean code practices',
  },
]

export const aboutSkills: string[] = [
  'Problem Solving',
  'Team Collaboration',
  'Continuous Learning',
  'Innovation',
  'Leadership',
]
