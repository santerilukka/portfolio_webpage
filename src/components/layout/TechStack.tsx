import React, { useEffect, useRef, useState } from 'react'
import CountUp from '../ui/effects/CountUpEffect.tsx'
import { technologies } from '../../data/tech.ts'
import { useTranslation } from 'react-i18next'

type TechStackProps = {
  asSection?: boolean
  className?: string
}

export function TechStack({
  asSection = true,
  className = '',
}: TechStackProps) {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement | HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const offscreenRef = useRef(false)
  const frameRef = useRef<number>()
  const scrollPosRef = useRef(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    pausedRef.current = isHovering
  }, [isHovering])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        offscreenRef.current = !entry.isIntersecting
      },
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const speed = 0.6
    const tick = () => {
      if (!pausedRef.current && !offscreenRef.current) {
        scrollPosRef.current += speed
        const half = container.scrollWidth / 2
        if (scrollPosRef.current >= half) scrollPosRef.current = 0
        container.scrollLeft = scrollPosRef.current
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const Inner = (
    <>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-medium mb-4'>
          {t('tech.title', 'Tech Stack')}
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          {t(
            'tech.subtitle',
            'Technologies and tools I work with to bring ideas to life'
          )}
        </p>
      </div>

      <div className='relative overflow-hidden'>
        <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10' />
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10' />

        <div
          ref={scrollRef}
          className='flex space-x-8 overflow-x-hidden select-none'
          style={{
            width: 'calc(100% + 40px)',
            marginLeft: '-20px',
            paddingLeft: '20px',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
          aria-label={t(
            'tech.carouselAria',
            'Continuously scrolling list of technologies'
          )}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <a
              key={`${tech.name}-${i}`}
              href={tech.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={tech.name}
              className='flex-shrink-0 flex flex-col items-center space-y-3 p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              style={{ minWidth: '150px' }}
            >
              <div className='text-3xl group-hover:scale-110 transition-transform'>
                {tech.icon}
              </div>
              <span
                className={`font-medium ${tech.color} group-hover:text-primary transition-colors`}
              >
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
        <div className='text-center'>
          <div className='text-2xl md:text-3xl font-medium text-primary'>
            <CountUp
              from={10}
              to={15}
              separator=' '
              direction='up'
              duration={0.2}
              className='count-up-text'
            />
            +
          </div>
          <div className='text-sm text-muted-foreground'>
            {t('tech.stats.technologies', 'Technologies')}
          </div>
        </div>

        <div className='text-center'>
          <div className='text-2xl md:text-3xl font-medium text-primary'>
            <CountUp
              from={0}
              to={3}
              separator=' '
              direction='up'
              duration={0.4}
              className='count-up-text'
            />
            +
          </div>
          <div className='text-sm text-muted-foreground'>
            {t('tech.stats.yearsLearning', 'Years Learning')}
          </div>
        </div>

        <div className='text-center'>
          <div className='text-2xl md:text-3xl font-medium text-primary'>
            <CountUp
              from={0}
              to={20}
              separator=' '
              direction='up'
              duration={0.6}
              className='count-up-text'
            />
            +
          </div>
          <div className='text-sm text-muted-foreground'>
            {t('tech.stats.projectsBuilt', 'Projects Built')}
          </div>
        </div>

        <div className='text-center'>
          <div className='text-2xl md:text-3xl font-medium text-primary'>
            <CountUp
              from={0}
              to={5}
              separator=' '
              direction='up'
              duration={0.8}
              className='count-up-text'
            />
            +
          </div>
          <div className='text-sm text-muted-foreground'>
            {t('tech.stats.certifications', 'Certifications')}
          </div>
        </div>
      </div>
    </>
  )

  if (!asSection) {
    return (
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={className}
      >
        {Inner}
      </div>
    )
  }

  return (
    <section
      id='tech-stack'
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-20 bg-background ${className}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{Inner}</div>
    </section>
  )
}
