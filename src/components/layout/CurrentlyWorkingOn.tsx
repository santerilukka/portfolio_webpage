import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { items } from '../../data/'

export function CurrentlyWorkingOn() {
  return (
    <section id='current-work' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            Currently Working On
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Active focus areas, learning initiatives, and ongoing build efforts.
          </p>
        </motion.div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow'>
                <div>
                  <div className='flex items-start justify-between mb-3'>
                    <h3 className='font-medium leading-snug'>{item.title}</h3>
                    {item.status && (
                      <Badge variant='secondary' className='text-xs'>
                        {item.status}
                      </Badge>
                    )}
                  </div>
                  <p className='text-sm text-muted-foreground mb-4'>
                    {item.description}
                  </p>
                </div>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {item.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant='outline'
                      className='text-[11px] font-normal'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
