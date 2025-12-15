'use client'

import ResumeCard from '@/components/ResumeCard'
import Section from '@/components/ui/section'
import PROJECTS from '@/lib/projects'

const Projects = () => {
  return (
    <Section delay={0.5} id="projects">
      <div className="grid py-10">
        <h2 className="text-3xl font-bold font-mono">PROJECTS</h2>
        <h3 className="text-foreground/70 text-base md:text-lg">
          Things I&apos;ve been working on lately.
        </h3>
      </div>
      <div className="grid gap-4">
        {PROJECTS.map(project => (
          <span key={project.id} className="">
            <ResumeCard
              logoUrl={project.images[0]?.url || ''}
              altText={project.images[0]?.alt || project.title}
              title={project.title}
              subtitle={project.jobTitle}
              period={project.period}
              description={project.content}
              highlights={project.highlights}
              badges={project.tech}
            />
          </span>
        ))}
      </div>
    </Section>
  )
}

export default Projects
