export type SocialLink = {
  label: string
  href: string
  icon: string
}

export type FocusArea = {
  title: string
  description: string
  stack: string[]
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type ProjectLink = {
  label: string
  href: string
  isDisabled?: boolean
}

export type Project = {
  title: string
  category: string
  summary: string
  purpose: string
  contribution: string
  stack: string[]
  platform: string
  features: string[]
  links: ProjectLink[]
}

export type ExperienceItem = {
  title: string
  organization: string
  description?: string
  period?: string
  responsibilities?: string[]
}

export type EducationItem = {
  institution: string
  program: string
  status: string
  graduationYear: string
}

export type ContactInfo = {
  email: string
  linkedin: string
  github: string
  instagram: string
  youtube: string
}
