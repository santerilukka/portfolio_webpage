/*

Currently unused component for possible future use

*/

import React from 'react'
import { Card } from '../ui/card'
import { Code, Lightbulb, Users, Zap } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies and frameworks',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description:
        'Passionate about finding creative solutions to complex challenges',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experience working in agile teams and open source projects',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description:
        'Quick to adapt and learn new technologies and methodologies',
    },
  ]

  return (
    <section id='about' className='py-20 bg-secondary/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>About Me</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            I'm a passionate Computer Science student at University with a love
            for creating innovative digital solutions. My journey in technology
            began during high school, and I've been fascinated by the power of
            code to solve real-world problems ever since.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Bio Section */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-2xl font-medium mb-4'>My Journey</h3>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  Currently pursuing my Bachelor's degree in Computer Science,
                  I've maintained a strong academic record while actively
                  participating in coding competitions and hackathons. My
                  coursework has given me a solid foundation in algorithms, data
                  structures, and software engineering principles.
                </p>
                <p>
                  Beyond academics, I'm actively involved in the tech community,
                  contributing to open source projects and mentoring fellow
                  students. I believe in the power of continuous learning and
                  staying up-to-date with emerging technologies.
                </p>
                <p>
                  When I'm not coding, you can find me reading tech blogs,
                  experimenting with new frameworks, or working on personal
                  projects that challenge me to grow as a developer.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className='p-6 hover:shadow-md transition-shadow'
              >
                <div className='flex flex-col items-center text-center space-y-3'>
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <highlight.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h4 className='font-medium'>{highlight.title}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
