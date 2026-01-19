import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

type ProjectI18n = {
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink?: string
  githubLink?: string
  featured?: boolean
}

export function Projects() {
  const { t } = useTranslation()

  const projects = t('projects.items', { returnObjects: true }) as ProjectI18n[]
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const githubUrl = t('projects.cta.githubUrl') as string

  return (
    <section id='projects' className='py-20 bg-secondary/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            {t('projects.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Featured Projects */}
        <div className='mb-16'>
          <h3 className='text-2xl font-medium mb-8'>
            {t('projects.featuredTitle')}
          </h3>

          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {featuredProjects.map((project, index) => (
              <Card
                key={`${project.title}-${index}`}
                className='overflow-hidden hover:shadow-lg transition-all duration-300 group'
              >
                <div className='relative overflow-hidden'>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                  />

                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2'>
                    {project.liveLink && (
                      <Button size='sm' variant='secondary' asChild>
                        <a
                          href={project.liveLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Eye className='h-4 w-4 mr-1' />
                          {t('projects.links.live')}
                        </a>
                      </Button>
                    )}

                    {project.githubLink && (
                      <Button size='sm' variant='secondary' asChild>
                        <a
                          href={project.githubLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Github className='h-4 w-4 mr-1' />
                          {t('projects.links.code')}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-start justify-between mb-3'>
                    <h4 className='font-medium group-hover:text-primary transition-colors'>
                      {project.title}
                    </h4>
                    <Badge variant='secondary' className='text-xs'>
                      {t('projects.badges.featured')}
                    </Badge>
                  </div>

                  <p className='text-sm text-muted-foreground mb-4 line-clamp-3'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-1 mb-4'>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant='outline' className='text-xs'>
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex items-center space-x-2'>
                    {project.liveLink && (
                      <Button size='sm' variant='ghost' asChild>
                        <a
                          href={project.liveLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='h-3 w-3 mr-1' />
                          {t('projects.links.liveDemo')}
                        </a>
                      </Button>
                    )}

                    {project.githubLink && (
                      <Button size='sm' variant='ghost' asChild>
                        <a
                          href={project.githubLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <Github className='h-3 w-3 mr-1' />
                          {t('projects.links.github')}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className='text-2xl font-medium mb-8'>
            {t('projects.otherTitle')}
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {otherProjects.map((project, index) => (
              <Card
                key={`${project.title}-${index}`}
                className='p-6 hover:shadow-md transition-shadow group'
              >
                <div className='flex items-start justify-between mb-3'>
                  <h4 className='font-medium group-hover:text-primary transition-colors'>
                    {project.title}
                  </h4>

                  <div className='flex space-x-1'>
                    {project.liveLink && (
                      <Button
                        size='sm'
                        variant='ghost'
                        asChild
                        className='h-6 w-6 p-0'
                      >
                        <a
                          href={project.liveLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={t('projects.links.liveAria')}
                        >
                          <ExternalLink className='h-3 w-3' />
                        </a>
                      </Button>
                    )}

                    {project.githubLink && (
                      <Button
                        size='sm'
                        variant='ghost'
                        asChild
                        className='h-6 w-6 p-0'
                      >
                        <a
                          href={project.githubLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={t('projects.links.githubAria')}
                        >
                          <Github className='h-3 w-3' />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className='text-sm text-muted-foreground mb-4'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1'>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant='outline' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-muted-foreground mb-4'>{t('projects.cta.text')}</p>
          <Button variant='outline' asChild>
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              <Github className='h-4 w-4 mr-2' />
              {t('projects.cta.button')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
