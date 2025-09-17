import React from 'react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import GlareHover from '../ui/effects/GlareHoverEffect'

export function Certificates() {
  const certificates = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      credentialId: 'CCP-12345',
      status: 'Active',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security'],
      link: '#',
    },
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google (via Coursera)',
      date: 'January 2024',
      credentialId: 'GOOG-67890',
      status: 'Active',
      skills: ['IT Support', 'Troubleshooting', 'Network Security'],
      link: '#',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'December 2023',
      credentialId: 'META-54321',
      status: 'Active',
      skills: ['React', 'JavaScript', 'Frontend Development'],
      link: '#',
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM (via Coursera)',
      date: 'October 2023',
      credentialId: 'IBM-98765',
      status: 'Active',
      skills: ['Python', 'Data Analysis', 'Machine Learning'],
      link: '#',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: 'August 2023',
      credentialId: 'FCC-11111',
      status: 'Active',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Git & GitHub Essentials',
      issuer: 'GitHub',
      date: 'June 2023',
      credentialId: 'GH-22222',
      status: 'Active',
      skills: ['Git', 'Version Control', 'Collaboration'],
      link: '#',
    },
  ]

  return (
    <section id='certificates' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            Certificates
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Professional certifications and achievements that validate my skills
            and knowledge
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {certificates.map((cert, index) => (
            <GlareHover
              key={index}
              width='100%'
              height='100%'
              background='transparent'
              borderColor='transparent'
              glareColor='#3d72e6'
              glareOpacity={0.1}
              glareAngle={-35}
              glareSize={300}
              transitionDuration={700}
              playOnce={false}
              className='rounded-md'
            >
              <Card className='w-full h-full p-6 hover:shadow-lg transition-all duration-300 group'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <Award className='h-6 w-6 text-primary' />
                  </div>
                  <Badge variant='secondary' className='text-xs'>
                    {cert.status}
                  </Badge>
                </div>

                <div className='space-y-4'>
                  <div>
                    <h3 className='font-medium mb-2 group-hover:text-primary transition-colors'>
                      {cert.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {cert.issuer}
                    </p>
                  </div>

                  <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                    <Calendar className='h-4 w-4' />
                    <span>{cert.date}</span>
                  </div>

                  <div>
                    <p className='text-xs text-muted-foreground mb-2'>
                      Credential ID:
                    </p>
                    <p className='text-sm font-mono bg-secondary/50 px-2 py-1 rounded text-xs'>
                      {cert.credentialId}
                    </p>
                  </div>

                  <div>
                    <p className='text-sm font-medium mb-2'>Skills Covered:</p>
                    <div className='flex flex-wrap gap-1'>
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant='outline'
                          className='text-xs'
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className='pt-2'>
                    <a
                      href={cert.link}
                      className='inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors'
                    >
                      View Certificate
                      <ExternalLink className='ml-1 h-3 w-3' />
                    </a>
                  </div>
                </div>
              </Card>
            </GlareHover>
          ))}
        </div>

        {/* Summary Stats */}
        <div className='mt-16 text-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <div className='text-2xl md:text-3xl font-medium text-primary'>
                6
              </div>
              <div className='text-sm text-muted-foreground'>
                Certificates Earned
              </div>
            </div>
            <div>
              <div className='text-2xl md:text-3xl font-medium text-primary'>
                4
              </div>
              <div className='text-sm text-muted-foreground'>
                Major Platforms
              </div>
            </div>
            <div>
              <div className='text-2xl md:text-3xl font-medium text-primary'>
                18+
              </div>
              <div className='text-sm text-muted-foreground'>
                Skills Validated
              </div>
            </div>
            <div>
              <div className='text-2xl md:text-3xl font-medium text-primary'>
                100%
              </div>
              <div className='text-sm text-muted-foreground'>Active Status</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
