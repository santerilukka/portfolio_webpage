import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Badge } from '../ui/badge'

export function AboutMeContent({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  const skills = t('about.skills', { returnObjects: true }) as string[]

  return (
    <div className={className}>
      {/* Intro block */}
      <motion.div
        className='text-center mb-10'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          {t('about.description')}
        </p>
      </motion.div>

      {/* Strengths / Skills */}
      <motion.div
        className='text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
  )
}

/**
 * Standalone page section version (keeps id='about' for navigation).
 * Use this in App.tsx when AboutMe is not embedded elsewhere.
 */
export default function AboutMe() {
  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <AboutMeContent />
      </div>
    </section>
  )
}
