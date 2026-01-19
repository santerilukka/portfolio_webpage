import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '../ui/badge'
import { useTranslation } from 'react-i18next'

export function AboutMeContent({ className = '' }: { className?: string }) {
  const { t } = useTranslation()

  return (
    <div className={className}>
      <motion.div
        className='text-center mb-10'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='mb-4 flex justify-center'>
          <Badge variant='secondary' className='px-4 py-2'>
            {t('about.available')}
          </Badge>
        </div>

        <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
          {t('about.description')}
        </p>

        <div className='mt-6 flex flex-wrap gap-3 justify-center'>
          <div className='px-4 py-2 rounded-full bg-card border text-sm font-medium shadow-sm hover:shadow transition-[box-shadow,color] duration-300'>
            {t('about.stats.technologies')}
          </div>
          <div className='px-4 py-2 rounded-full bg-card border text-sm font-medium shadow-sm hover:shadow transition-[box-shadow,color] duration-300'>
            {t('about.stats.yearsLearning')}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
