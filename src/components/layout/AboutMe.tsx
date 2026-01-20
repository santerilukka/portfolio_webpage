import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/badge'
import { useTranslation } from 'react-i18next'

export function AboutMeContent({ className = '' }: { className?: string }) {
  const { t } = useTranslation()

  return (
    <div className={className}>
      <motion.div
        className='text-center mb-14 md:mb-16'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='mb-6 md:mb-8 flex justify-center'>
          {/*<Badge variant='secondary' className='px-4 py-2'>
            {t('about.available')}
          </Badge>*/}
        </div>

        <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed md:leading-relaxed'>
          {t('about.description')}
        </p>

        <div className='mt-8 md:mt-10 flex flex-wrap gap-4 md:gap-5 justify-center'>
          <div className='px-4 py-2 rounded-full bg-card border text-sm font-medium shadow-sm hover:shadow transition-[box-shadow,color] duration-300'>
            {t('about.stats.technologies')}
          </div>
          <div className='px-4 py-2 rounded-full bg-card border text-sm font-medium shadow-sm hover:shadow transition-[box-shadow,color] duration-300'>
            {t('about.stats.yearsLearning')}
          </div>
          <div className='px-4 py-2 rounded-full bg-card border text-sm font-medium shadow-sm hover:shadow transition-[box-shadow,color] duration-300'>
            {t('about.stats.projectsBuilt')}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
