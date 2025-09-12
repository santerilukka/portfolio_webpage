import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun, Github, Linkedin, Menu, X } from 'lucide-react'

export function Navigation() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Education', id: 'education' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <span className='text-xl font-medium'></span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className='text-foreground hover:text-primary px-3 py-2 rounded-md text-sm transition-colors'
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className='hidden md:flex items-center space-x-2'>
            <Button variant='ghost' size='sm' asChild>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='h-4 w-4' />
              </a>
            </Button>
            <Button variant='ghost' size='sm' asChild>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-4 w-4' />
              </a>
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-4 w-4' />
              ) : (
                <Menu className='h-4 w-4' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className='text-foreground hover:text-primary block px-3 py-2 rounded-md text-base w-full text-left transition-colors'
                >
                  {item.label}
                </button>
              ))}
              <div className='flex items-center space-x-2 px-3 py-2'>
                <Button variant='ghost' size='sm' asChild>
                  <a
                    href='https://github.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='h-4 w-4' />
                  </a>
                </Button>
                <Button variant='ghost' size='sm' asChild>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='h-4 w-4' />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
