import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type EducationProps = {
  asSection?: boolean
  className?: string
}

type EducationCourse = {
  name: string
  link?: string
}

type EducationItemI18n = {
  degree: string
  school: string
  location?: string
  period: string
  status?: string
  gpa?: string
  description: string
  courses: EducationCourse[]
}

export default function Education({
  asSection = true,
  className = '',
}: EducationProps) {
  const { t } = useTranslation()

  const items = t('education.items', {
    returnObjects: true,
  }) as EducationItemI18n[]

  const Inner = (
    <>
      <motion.div
        className='text-center mb-16'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-3xl md:text-4xl font-medium mb-4'>
          {t('education.title')}
        </h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          {t('education.subtitle')}
        </p>
      </motion.div>

      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {items.map((edu, index) => (
          <motion.div
            key={`${edu.degree}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className='h-full hover:shadow-lg transition-all duration-300 group'>
              <CardHeader>
                <div className='flex items-start justify-between mb-2'>
                  <GraduationCap className='w-8 h-8 text-primary flex-shrink-0 mt-1' />
                  {edu.status && (
                    <Badge
                      variant={
                        edu.status === 'Completed' ? 'default' : 'secondary'
                      }
                      className='ml-2'
                    >
                      {edu.status}
                    </Badge>
                  )}
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
                    <div className='text-muted-foreground'>{edu.location}</div>
                  )}

                  {edu.gpa && (
                    <div className='font-medium text-foreground'>
                      {t('education.gpaLabel')}: {edu.gpa}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <p className='text-muted-foreground mb-4'>{edu.description}</p>

                <div className='space-y-2'>
                  <h4 className='font-medium text-sm'>
                    {t('education.keyCourses')}:
                  </h4>

                  <div className='flex flex-wrap gap-2'>
                    {edu.courses.map((course) => {
                      const content = (
                        <span className='inline-block'>{course.name}</span>
                      )

                      return (
                        <Badge
                          key={course.name}
                          asChild={!!course.link}
                          variant='outline'
                          className='text-xs'
                        >
                          {course.link ? (
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
                          ) : (
                            content
                          )}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )

  if (!asSection) {
    return (
      <div id='education' className={className}>
        {Inner}
      </div>
    )
  }

  return (
    <section
      id='education'
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className='max-w-7xl mx-auto'>{Inner}</div>
    </section>
  )
}
