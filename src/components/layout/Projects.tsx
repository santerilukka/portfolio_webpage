import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
      image:
        'https://images.unsplash.com/photo-1642132652803-01f9738d0446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBwcm9qZWN0fGVufDF8fHx8MTc1NzcwMTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Stripe',
        'Tailwind CSS',
      ],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNTc3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Firebase', 'React DnD', 'Material-UI'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Data Analytics Dashboard',
      description:
        'An interactive dashboard for visualizing business metrics and KPIs with real-time data updates and customizable charts.',
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzU5ODc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      title: 'Weather App',
      description:
        'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      image:
        'https://images.unsplash.com/photo-1642132652803-01f9738d0446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBwcm9qZWN0fGVufDF8fHx8MTc1NzcwMTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: [
        'React',
        'OpenWeather API',
        'Leaflet',
        'Styled Components',
      ],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with markdown support, user authentication, and content management system.',
      image:
        'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNTc3NjI3ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'MDX', 'Prisma', 'NextAuth.js'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description:
        'This responsive portfolio website showcasing my projects, skills, and experience with modern design principles.',
      image:
        'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzU5ODc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id='projects' className='py-20 bg-secondary/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>Projects</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </div>

        {/* Featured Projects */}
        <div className='mb-16'>
          <h3 className='text-2xl font-medium mb-8'>Featured Projects</h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className='overflow-hidden hover:shadow-lg transition-all duration-300 group'
              >
                <div className='relative overflow-hidden'>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2'>
                    <Button size='sm' variant='secondary' asChild>
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Eye className='h-4 w-4 mr-1' />
                        Live
                      </a>
                    </Button>
                    <Button size='sm' variant='secondary' asChild>
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className='h-4 w-4 mr-1' />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-start justify-between mb-3'>
                    <h4 className='font-medium group-hover:text-primary transition-colors'>
                      {project.title}
                    </h4>
                    <Badge variant='secondary' className='text-xs'>
                      Featured
                    </Badge>
                  </div>

                  <p className='text-sm text-muted-foreground mb-4 line-clamp-3'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-1 mb-4'>
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant='outline'
                        className='text-xs'
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex items-center space-x-2'>
                    <Button size='sm' variant='ghost' asChild>
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='h-3 w-3 mr-1' />
                        Live Demo
                      </a>
                    </Button>
                    <Button size='sm' variant='ghost' asChild>
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className='h-3 w-3 mr-1' />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className='text-2xl font-medium mb-8'>Other Projects</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className='p-6 hover:shadow-md transition-shadow group'
              >
                <div className='flex items-start justify-between mb-3'>
                  <h4 className='font-medium group-hover:text-primary transition-colors'>
                    {project.title}
                  </h4>
                  <div className='flex space-x-1'>
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
                      >
                        <ExternalLink className='h-3 w-3' />
                      </a>
                    </Button>
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
                      >
                        <Github className='h-3 w-3' />
                      </a>
                    </Button>
                  </div>
                </div>

                <p className='text-sm text-muted-foreground mb-4'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-1'>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant='outline'
                      className='text-xs'
                    >
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
          <p className='text-muted-foreground mb-4'>
            Want to see more of my work?
          </p>
          <Button variant='outline' asChild>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='h-4 w-4 mr-2' />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
