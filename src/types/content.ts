export type Course = { name: string; link?: string }
export type EducationItem = {
  degree: string
  school: string
  location: string
  period: string
  status?: string
  gpa?: string
  description: string
  courses: Course[]
}

export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
  featured?: boolean
}

export type Certificate = {
  title: string
  issuer: string
  date: string
  credentialId: string
  status?: string
  skills: string[]
  link?: string
}

export type WorkItem = {
  title: string
  description: string
  stack: string[]
  status?: string
}
export type TechItem = {
  name: string
  icon: string
  color: string
  link: string
}
