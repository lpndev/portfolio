import { Suspense } from 'react'
import Link from 'next/link'

import { githubUser, projects } from '@/lib/data'

import { Button } from '@/components/ui/button'
import ProjectCard from '@/components/ui/project-card'
import Working from '@/components/ui/working'
import Container from '@/components/container'
import Section from '@/components/section'

function Projects() {
  return (
    <Section>
      <Container className='gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <span className='opacity-60'>Projects</span>
          <h3 className='scroll-m-20 text-center text-2xl font-semibold tracking-tight first:mt-0'>
            See my best projects
          </h3>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <Working>
            <div className='space-y-4'>
              <Suspense fallback={<div>Loading...</div>}>
                {projects.map((project, i) => (
                  <ProjectCard
                    key={i}
                    href={project.hash}
                    image={project.img}
                    badges={project.badges}
                    title={project.title}
                    body={project.body}
                  />
                ))}
              </Suspense>
            </div>
          </Working>
          <div>
            <Button variant='link' asChild>
              <Link
                href={`https://github.com/${githubUser}?tab=repositories`}
                target='_blank'
              >
                See more projects ↗
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Projects
