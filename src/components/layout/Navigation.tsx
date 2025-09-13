import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun, Github, Linkedin, Menu, X } from 'lucide-react'

export function Navigation() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Education', id: 'education' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'Projects', id: 'projects' },
    { label: 'Currently', id: 'current-work' },
    { label: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  // Observe sections to auto-highlight nav item
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        // Trigger when section center crosses viewport center-ish
        root: null,
        threshold: 0.4,
        rootMargin: '0px 0px -20% 0px',
      }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, []) // run once after mount

  const linkBase = 'px-3 py-2 rounded-md text-sm transition-colors'
  const inactive = 'text-foreground hover:text-primary'
  const active = 'text-primary font-medium'

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
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`${linkBase} ${isActive ? active : inactive}`}
                  >
                    {item.label}
                  </button>
                )
              })}
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
            <div className='md:hidden flex items-center space-x-2'>
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
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base transition-colors ${
                      isActive
                        ? 'text-primary font-medium'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
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
