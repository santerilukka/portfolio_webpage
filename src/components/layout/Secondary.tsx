import React from 'react'
import { TechStack } from './TechStack'
import { CurrentlyWorkingOn } from './CurrentlyWorkingOn'

export function Secondary() {
  return (
    <section id='tech-stack' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-2 lg:items-start secondary-grid'>
          <div className='min-w-0'>
            <TechStack asSection={false} />
          </div>
          <div className='min-w-0'>
            <CurrentlyWorkingOn asSection={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
