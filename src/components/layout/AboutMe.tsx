import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { aboutHighlights } from '../../data'

const AboutMe = () => {
  const { t } = useTranslation()

  const skills = t('about.skills', { returnObjects: true }) as string[]

  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Intro block */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            {t('about.title')}
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            {t('about.description')}
          </p>
        </motion.div>

        {/* Highlights */}
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {aboutHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-lg transition-shadow duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-10 h-10 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                    <highlight.icon className='w-6 h-6 text-primary' />
                  </div>

                  <h3 className='text-xl font-semibold mb-3'>
                    {t(`about.highlights.${index}.title`)}
                  </h3>

                  <p className='text-muted-foreground'>
                    {t(`about.highlights.${index}.description`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Strengths / Skills */}
        <motion.div
          className='text-center mt-16 md:mt-24 pt-12 pb-10 px-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
      </div>
    </section>
  )
}

export default AboutMe
