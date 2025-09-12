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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          {/* Profile Image */}
          <div className='mb-8'>
            <div className='relative inline-block'>
              <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg'>
                <ImageWithFallback
                  src={heroImage}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background'></div>
            </div>
          </div>

          {/* Main Content */}
          <div className='space-y-6'>
            <div>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight'>
                Hi, I'm <span className='text-primary'>Santeri Lukka</span>
              </h1>
              <p className='text-xl md:text-2xl text-muted-foreground mt-4'>
                University Student
              </p>
            </div>

            <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              Passionate about creating innovative digital experiences through
              code. Currently studying Computer Science and building projects
              that make a difference.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
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

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
            <ArrowDown className='h-6 w-6 text-muted-foreground' />
          </div>
        </div>
      </div>
    </section>
  )
}
