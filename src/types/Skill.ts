import { ReactComponentElement, ReactNode } from 'react'

export interface Skill {
  proficiency: number
  logo: string
  name: string
  component?: () => JSX.Element
}
