import { Badge } from '@/components/ui/badge'
import Section from '@/components/ui/section'
import React from 'react'

const skills: string[] = [
  'React Native',
  'Typescript',
  'Firebase',
  'MongoDB',
  'NestJS',
  'React Query',
  'TailwindCSS',
  'Redux',
  'NextJS',
  'Vite',
  'Payload CMS',
  'AWS',
  'Google Cloud Functions',
  'Figma',
  'Git',
]

const Skills: React.FC = () => {
  return (
    <Section delay={0.6} id="tech_stack">
      <h2 className="text-3xl font-bold mb-3 font-mono">I LIKE WORKING WITH</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s, idx) => (
          <Badge key={idx}>{s}</Badge>
        ))}
      </div>
    </Section>
  )
}

export default Skills
