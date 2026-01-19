import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { items } from '../../data/'
import { aboutHighlights } from '../../data'

export function CurrentlyWorkingOn() {
  const { t } = useTranslation()
  const skills = t('about.skills', { returnObjects: true }) as string[]

  return (
    <section id='current-work' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            {t('currentWork.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {t('currentWork.subtitle')}
          </p>
        </motion.div>

        {/* Moved from AboutMe: Background / Focus Areas / Approach */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          {aboutHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <Card className='p-6 h-full hover:shadow-md transition-shadow'>
                <div className='flex flex-col items-center text-center space-y-3'>
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <highlight.icon className='h-6 w-6 text-primary' />
                  </div>
                  <h3 className='font-medium'>
                    {t(`about.highlights.${index}.title`)}
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    {t(`about.highlights.${index}.description`)}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Strengths / Skills (moved from AboutMe) */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className='text-2xl md:text-3xl font-medium mb-6'>
            {t('about.strengthsTitle')}
          </h3>
          <div className='flex flex-wrap justify-center gap-3'>
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant='secondary'
                className='text-sm py-2 px-4'
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Existing "currently working on" items */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow'>
                <div>
                  <div className='flex items-start justify-between mb-3'>
                    <h3 className='font-medium leading-snug'>{item.title}</h3>
                    {item.status && (
                      <Badge variant='secondary' className='text-xs'>
                        {item.status}
                      </Badge>
                    )}
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>
                    {item.description}
                  </p>
                </div>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant='outline' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
