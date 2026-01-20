import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

// pick icons you want to use:
import { Sparkles, Target, Rocket } from 'lucide-react'

type HighlightI18n = {
  title: string
  description: string
  icon: 'sparkles' | 'target' | 'rocket'
}

type WorkItemI18n = {
  title: string
  description: string
  stack: string[]
  status?: string
}

const highlightIconMap = {
  sparkles: Sparkles,
  target: Target,
  rocket: Rocket,
} satisfies Record<
  HighlightI18n['icon'],
  React.ComponentType<{ className?: string }>
>

export function CurrentlyWorkingOn({
  asSection = true,
  className = '',
}: {
  asSection?: boolean
  className?: string
}) {
  const { t } = useTranslation()

  const highlights = t('currentWork.highlights', {
    returnObjects: true,
  }) as HighlightI18n[]

  const items = t('currentWork.items', {
    returnObjects: true,
  }) as WorkItemI18n[]

  const Inner = (
    <>
      {/* Background interests / approach cards FIRST */}
      <div className='grid md:grid-cols-3 gap- mb-16'>
        {highlights.map((highlight, index) => {
          const Icon = highlightIconMap[highlight.icon]
          return (
            <motion.div
              key={`${highlight.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <Card className='p-3 h-full hover:shadow-md transition-shadow'>
                <div className='flex flex-col items-center text-center space-y-3'>
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <Icon className='h-5 w-5 text-primary' />
                  </div>

                  <h3 className='font-medium'>{highlight.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {highlight.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Header AFTER */}
      <div className='text-center mb-8'>
        <h3 className='text-2xl md:text-3xl font-medium mt-4'>
          {t('currentWork.title')}
        </h3>
      </div>

      <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {items.map((item, i) => (
          <motion.div
            key={`${item.title}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className='p-4 h-full flex flex-col justify-between hover:shadow-md transition-shadow'>
              <div>
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='font-medium leading-snug'>{item.title}</h3>
                  {item.status && (
                    <Badge variant='secondary' className='text-xs'>
                      {item.status}
                    </Badge>
                  )}
                </div>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>

              <div className='flex flex-wrap gap-1'>
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
    </>
  )

  if (!asSection) {
    return (
      <div id='current-work' className={className}>
        {Inner}
      </div>
    )
  }

  return (
    <section
      id='current-work'
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className='max-w-7xl mx-auto'>{Inner}</div>
    </section>
  )
}
