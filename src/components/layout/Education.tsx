import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { educationData } from '../../data'

const Education = () => {
  return (
    <section id='education' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>Education</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {' '}
          {/*<div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-center'>*/}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-lg transition-all duration-300 group'>
                <CardHeader>
                  <div className='flex items-start justify-between mb-2'>
                    <GraduationCap className='w-8 h-8 text-primary flex-shrink-0 mt-1' />
                    <Badge
                      variant={
                        edu.status === 'Completed' ? 'default' : 'secondary'
                      }
                      className='ml-2'
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  <CardTitle className='text-lg leading-tight group-hover:text-primary transition-colors'>
                    {edu.degree}
                  </CardTitle>
                  <div className='space-y-2 text-sm text-muted-foreground'>
                    <div className='flex items-center'>
                      <MapPin className='w-4 h-4 mr-2' />
                      {edu.school}
                    </div>
                    <div className='flex items-center'>
                      <Calendar className='w-4 h-4 mr-2' />
                      {edu.period}
                    </div>
                    {edu.location && (
                      <div className='text-muted-foreground'>
                        {edu.location}
                      </div>
                    )}
                    {edu.gpa && (
                      <div className='font-medium text-foreground'>
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>
                    {edu.description}
                  </p>
                  <div className='space-y-2'>
                    <h4 className='font-medium text-sm'>Key Courses:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {edu.courses.map((course) => (
                        <Badge
                          asChild
                          key={course.name}
                          variant='outline'
                          className='text-xs'
                        >
                          <motion.a
                            href={course.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                          >
                            {course.name}
                          </motion.a>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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

export default Education
