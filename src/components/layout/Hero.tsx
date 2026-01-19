import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
}

function HeroText() {
  const { t } = useTranslation()

  return (
    <motion.div
      className='w-full text-center lg:text-left space-y-5'
      {...fadeInLeft}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h1
        className='text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className='text-primary'>{t('hero.name')}</span>
      </motion.h1>

      <motion.p
        className='text-xl md:text-2xl text-muted-foreground'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
      >
        {t('hero.subtitle')}
      </motion.p>
    </motion.div>
  )
}

export function HeroLeft() {
  return <HeroText />
}
