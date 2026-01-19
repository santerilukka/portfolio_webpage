import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import LightRays from '../ui/effects/LightRays'
import AboutMe from './AboutMe'

function useDelayedTrue(delayMs: number) {
  const [value, setValue] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setValue(true), delayMs)
    return () => clearTimeout(id)
  }, [delayMs])
  return value
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
}

type Achievement = { label: string }

function HeroBackground({ showRays }: { showRays: boolean }) {
  return (
    <>
      <div className='absolute inset-0 pointer-events-none'>
        {showRays && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'ease' }}
            className='w-full h-full'
          >
            <LightRays
              raysOrigin='top-center'
              raysColor='#0f4ed2'
              raysSpeed={0.4}
              lightSpread={2}
              rayLength={2}
              followMouse
              mouseInfluence={0}
              noiseAmount={0}
              distortion={0}
              saturation={1}
              className='mix-blend-screen'
            />
          </motion.div>
        )}
      </div>

      {/* Subtle animated accents */}
      <motion.div
        aria-hidden
        className='pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl'
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className='pointer-events-none absolute bottom-[-6rem] right-[-6rem] w-96 h-96 rounded-full bg-secondary/30 blur-3xl'
        animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className='pointer-events-none absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/30 blur-2xl'
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}

function HeroText({
  achievements,
  onPrimaryCta,
}: {
  achievements: Achievement[]
  onPrimaryCta: () => void
}) {
  return (
    <motion.div
      className='w-full text-center lg:text-left space-y-8'
      {...fadeInLeft}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className='space-y-5'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Badge variant='secondary' className='px-4 py-2'>
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          className='text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className='text-primary'>Santeri Lukka</span>
        </motion.h1>

        <motion.div
          className='space-y-2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <p className='text-xl md:text-2xl text-muted-foreground'>
            24-year-old IT & IEM University Student
          </p>
        </motion.div>
      </div>
      {/* 
      <motion.p
        className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed'
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Driven by tech. Thriving in dynamic environments. Valuing collaboration.
        Open to new challenges. Eager to make an impact.
      </motion.p>
*/}
      <motion.div
        className='flex flex-wrap gap-3 justify-center lg:justify-start'
        {...fadeInUp}
        transition={{ duration: 0.55, delay: 0.45 }}
      >
        {achievements.map((a) => (
          <div
            key={a.label}
            className='px-4 py-2 rounded-full bg-card border text-sm font-medium shadow-sm hover:shadow transition-[box-shadow,color] duration-300'
          >
            {a.label}
          </div>
        ))}
      </motion.div>

      <motion.div
        className='flex flex-col sm:flex-row gap-4 sm:justify-start justify-center items-center pt-2'
        {...fadeInUp}
        transition={{ duration: 0.55, delay: 0.55 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size='lg'
            onClick={onPrimaryCta}
            className='text-base px-8 py-6'
          >
            View My Work
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
            <a href='#contact'>Get In Touch</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function ScrollCta({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type='button'
      onClick={onClick}
      aria-label='Scroll to about'
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

export function Hero() {
  const showRays = useDelayedTrue(300)

  const achievements = useMemo(
    () => [{ label: '15+ Technologies' }, { label: '3+ Years Learning' }],
    []
  )

  const goToAbout = () => scrollToId('about')

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20'
    >
      <HeroBackground showRays={showRays} />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
          {/* Left: original hero content */}
          <HeroText achievements={achievements} onPrimaryCta={goToAbout} />

          {/* Right: AboutMe content */}
          <motion.div
            {...fadeInRight}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className='w-full'
          >
            {/* Avoid nested section spacing; AboutMe already has padding but we want it in-place */}
            <div className='lg:pl-4'>
              <AboutMe />
            </div>
          </motion.div>
        </div>

        <ScrollCta onClick={goToAbout} />
      </div>
    </section>
  )
}
