import React from 'react'
import heroImage from '../../assets/hero-image.jpg'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 w-full'>
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-20'>
          {/* Text (Left on large screens) */}
          <div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
            <div>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight'>
                <span className='text-primary'>Santeri Lukka</span>
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground mt-4'>
                24-year-old IT & IEM University Student
              </p>
            </div>
            <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
              Passionate about creating innovative solutions and building
              meaningful digital experiences
            </p>
            <div className='flex flex-col sm:flex-row gap-4 sm:justify-start justify-center items-center mt-8'>
              <Button
                size='lg'
                onClick={scrollToProjects}
                className='text-base px-8 py-6'
              >
                View My Work
                <ArrowDown className='ml-2 h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                asChild
                className='text-base px-8 py-6'
              >
                <a href='#contact'>Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Image (Right on large screens) */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0'>
            <div className='relative inline-block'>
              <div className='w-86 max-w-xs md:w-72'>
                <ImageWithFallback
                  src={heroImage}
                  alt='Profile'
                  className='aspect-square w-full rounded-full object-cover border-4 border-primary/10'
                />
              </div>
              <div className='absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-background' />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ArrowDown className='h-8 w-8 text-muted-foreground' />
        </div>
      </div>
    </section>
  )
}
