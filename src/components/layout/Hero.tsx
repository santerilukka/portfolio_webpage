import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import { Badge } from '../ui/badge'
import { motion } from 'framer-motion'
import LightRays from '../ui/effects/LightRays'

const heroImage =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'

export function Hero() {
  const [showRays, setShowRays] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setShowRays(true), 300)
    return () => clearTimeout(id)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const achievements = [
    { label: '15+ Technologies' },
    { label: '20+ Projects' },
    { label: '5+ Certifications' },
    { label: '3+ Years Learning' },
  ]

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20'
    >
      <div className='absolute inset-0 pointer-events-none'>
        {showRays && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'ease', delay: 0 }}
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

      {/* Animated background accents (subtle, using existing palette) */}
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

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 w-full'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Text Column */}
          <motion.div
            className='w-full lg:w-1/2 text-center lg:text-left space-y-8'
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
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
                <p className='text-lg text-muted-foreground/80'>
                  Creative Developer & Problem Solver
                </p>
              </motion.div>
            </div>

            <motion.p
              className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed'
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Passionate about creating innovative solutions and building
              meaningful digital experiences through clean code and thoughtful
              design.
            </motion.p>

            {/* Achievement chips */}
            <motion.div
              className='flex flex-wrap gap-3 justify-center lg:justify-start'
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
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

            {/* CTAs */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4 sm:justify-start justify-center items-center pt-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  onClick={scrollToProjects}
                  className='text-base px-8 py-6'
                >
                  View My Work
                  <ArrowDown className='ml-2 h-4 w-4' />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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

          {/* Image Column */}
          <motion.div
            className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.27 }}
          >
            <div className='relative inline-block'>
              {/* Decorative rotating rings */}
              <motion.div
                aria-hidden
                className='absolute inset-0 rounded-full border-2 border-primary/10 scale-110'
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                aria-hidden
                className='absolute inset-0 rounded-full border border-accent/30 scale-125'
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
              />
              <div className='w-80 max-w-xs md:w-96 relative'>
                <motion.div
                  aria-hidden
                  className='absolute inset-0 bg-primary/10 rounded-full blur-2xl'
                  animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <ImageWithFallback
                  src={heroImage}
                  alt='Profile'
                  className='aspect-square w-full rounded-full object-cover border-4 border-primary/10 shadow-xl relative z-10'
                />
              </div>
              {/* Status indicator */}
              <motion.div
                className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-background shadow'
                animate={{ scale: [1, 1.18, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.button
          type='button'
          onClick={scrollToProjects}
          aria-label='Scroll to projects'
          className='absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 group focus:outline-none'
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

          <motion.span
            className='text-xs font-medium tracking-wider text-muted-foreground group-hover:text-foreground'
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Scroll Down
          </motion.span>
        </motion.button>
      </div>
    </section>
  )
}
