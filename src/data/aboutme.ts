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
    "I'm a dedicated student pursuing IT and IEM. My journey combines both technical knowledge about the huge world of Information Tehcnology with business and management aspects. I'm committed to life long learning and growth in the tech world.",
}

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: User,
    title: 'Background',
    description:
      'IT & IEM M.Sc. student with a passion for technology and business',
  },
  {
    icon: Target,
    title: 'Focus Areas',
    description: 'Software Engineering, IS/IT Management, Corporate Strategy ',
  },
  {
    icon: Lightbulb,
    title: 'Approach',
    description:
      'Problem-solving & improvement mindset driven by curiosity and innovation',
  },
]

export const aboutSkills: string[] = [
  'Problem Solving',
  'Team Collaboration',
  'Continuous Learning',
  'Innovation',
  'Management',
]
