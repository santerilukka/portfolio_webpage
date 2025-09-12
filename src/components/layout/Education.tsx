import React from 'react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      location: 'City, State',
      period: '2022 - 2026',
      gpa: '3.8/4.0',
      status: 'In Progress',
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Machine Learning',
        'Computer Networks',
      ],
      achievements: [
        "Dean's List (3 semesters)",
        'Computer Science Society Member',
        'Hackathon Winner 2023',
      ],
    },
    {
      degree: 'High School Diploma',
      institution: 'Central High School',
      location: 'City, State',
      period: '2018 - 2022',
      gpa: '3.9/4.0',
      status: 'Graduated',
      coursework: [
        'AP Computer Science',
        'AP Mathematics',
        'AP Physics',
        'Advanced Programming',
      ],
      achievements: [
        'Valedictorian',
        'National Honor Society',
        'Programming Club President',
      ],
    },
  ]

  return (
    <section id='education' className='py-20 bg-secondary/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>Education</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            My academic journey and continuous learning path
          </p>
        </div>

        <div className='space-y-8'>
          {education.map((edu, index) => (
            <Card key={index} className='p-8 hover:shadow-lg transition-shadow'>
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between'>
                <div className='flex-1'>
                  <div className='flex items-start space-x-4'>
                    <div className='p-3 bg-primary/10 rounded-full'>
                      <GraduationCap className='h-6 w-6 text-primary' />
                    </div>
                    <div className='flex-1'>
                      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
                        <div>
                          <h3 className='text-xl font-medium mb-1'>
                            {edu.degree}
                          </h3>
                          <p className='text-lg text-muted-foreground'>
                            {edu.institution}
                          </p>
                        </div>
                        <Badge
                          variant={
                            edu.status === 'In Progress'
                              ? 'default'
                              : 'secondary'
                          }
                          className='mt-2 sm:mt-0'
                        >
                          {edu.status}
                        </Badge>
                      </div>

                      <div className='flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6 text-sm text-muted-foreground'>
                        <div className='flex items-center space-x-2'>
                          <Calendar className='h-4 w-4' />
                          <span>{edu.period}</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <MapPin className='h-4 w-4' />
                          <span>{edu.location}</span>
                        </div>
                        <div className='font-medium text-primary'>
                          GPA: {edu.gpa}
                        </div>
                      </div>

                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div>
                          <h4 className='font-medium mb-3'>
                            Relevant Coursework
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {edu.coursework.map((course, courseIndex) => (
                              <Badge
                                key={courseIndex}
                                variant='outline'
                                className='text-xs'
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className='font-medium mb-3'>Achievements</h4>
                          <ul className='space-y-1 text-sm text-muted-foreground'>
                            {edu.achievements.map(
                              (achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className='flex items-center'
                                >
                                  <div className='w-1.5 h-1.5 bg-primary rounded-full mr-2'></div>
                                  {achievement}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
