import React from 'react'
import Education from './Education'
import { Certificates } from './Certificates'

export function Tertiary() {
  return (
    <section id='education' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-2 lg:items-start tertiary-grid'>
          <div className='min-w-0'>
            <Education asSection={false} />
          </div>
          <div className='min-w-0 tertiary-certificates'>
            <Certificates asSection={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
