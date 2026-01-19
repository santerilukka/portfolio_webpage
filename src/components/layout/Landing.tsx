import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '../ui/button'
import { HeroLeft } from './Hero'
import { AboutMeContent } from './AboutMe'
import { HeroBackground } from './HeroBackground'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function ScrollCta({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type='button'
      onClick={onClick}
      aria-label='Scroll to next section'
      className='absolute bottom-2 pt-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 group focus:outline-none'
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className='h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary' />
      </motion.div>
      <span className='text-xs font-medium tracking-wider text-muted-foreground group-hover:text-foreground'>
        Scroll Down
      </span>
    </motion.button>
  )
}

export function Landing() {
  const { t } = useTranslation()
  const goToNext = () => scrollToId('tech-stack')

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20'
    >
      <HeroBackground />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 w-full'>
        {/* Top: Hero */}
        <div className='flex flex-col items-center'>
          <HeroLeft />
        </div>

        {/* Below hero: About */}
        <motion.div
          className='mt-10'
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className='max-w-3xl mx-auto'>
            <AboutMeContent />
          </div>
        </motion.div>

        {/* CTAs below About */}
        <motion.div
          className='mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center'
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size='lg'
              onClick={goToNext}
              className='text-base px-8 py-6'
            >
              {t('hero.cta.primary')}
              <ArrowDown className='ml-2 h-4 w-4' />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='text-base px-8 py-6'
            >
              <a href='#contact'>{t('hero.cta.secondary')}</a>
            </Button>
          </motion.div>
        </motion.div>

        <ScrollCta onClick={goToNext} />
      </div>
    </section>
  )
}
