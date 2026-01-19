import React, { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '../ui/button'
import { LanguageSelect } from './Buttons/LanguageSelect'
import { GithubButton } from './Buttons/GitHubButton'
import { LinkedinButton } from './Buttons/LinkedInButton'
import { ThemeToggleButton } from './Buttons/ThemeToggleButton'

type NavItem = { label: string; id: string }

function NavLinks({
  items,
  activeSection,
  onClick,
  className,
  linkBase,
  activeClassName,
  inactiveClassName,
}: {
  items: NavItem[]
  activeSection: string
  onClick: (id: string) => void
  className?: string
  linkBase: string
  activeClassName: string
  inactiveClassName: string
}) {
  return (
    <div className={className}>
      {items.map((item) => {
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            onClick={() => onClick(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`${linkBase} ${
              isActive ? activeClassName : inactiveClassName
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

function DesktopActions({
  darkMode,
  onToggleTheme,
}: {
  darkMode: boolean
  onToggleTheme: () => void
}) {
  return (
    <div className='hidden md:flex items-center space-x-2'>
      <GithubButton />
      <LinkedinButton />
      <LanguageSelect />
      <ThemeToggleButton darkMode={darkMode} onToggle={onToggleTheme} />
    </div>
  )
}

function MobileActions({
  darkMode,
  onToggleTheme,
  isMenuOpen,
  onToggleMenu,
}: {
  darkMode: boolean
  onToggleTheme: () => void
  isMenuOpen: boolean
  onToggleMenu: () => void
}) {
  return (
    <div className='md:hidden flex items-center space-x-2'>
      <GithubButton />
      <LinkedinButton />
      <LanguageSelect />
      <ThemeToggleButton darkMode={darkMode} onToggle={onToggleTheme} />
      <Button variant='ghost' size='sm' onClick={onToggleMenu} type='button'>
        {isMenuOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
      </Button>
    </div>
  )
}

function MobileMenu({
  items,
  activeSection,
  onNavClick,
}: {
  items: NavItem[]
  activeSection: string
  onNavClick: (id: string) => void
}) {
  return (
    <div className='md:hidden'>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border'>
        {items.map((item) => {
          const isActive = activeSection === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`block w-full text-left px-4 py-3 rounded-md text-lg transition-colors ${
                isActive
                  ? 'text-primary font-medium'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function Navigation() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return true
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const observerRef = useRef<IntersectionObserver | null>(null)

  const { t } = useTranslation()

  const navLabelList = t('nav.items', { returnObjects: true }) as string[]
  const navSectionIds = [
    'hero',
    'about',
    'tech-stack',
    'education',
    'certificates',
    'projects',
    'current-work',
    'contact',
  ] as const

  const navItems: NavItem[] = navSectionIds.map((id, idx) => ({
    id,
    label: navLabelList[idx] ?? '',
  }))

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    el?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
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
  }, [])

  const linkBase = 'px-4 py-3 rounded-md text-base md:text-lg transition-colors'
  const inactive = 'text-foreground hover:text-primary'
  const active = 'text-primary font-large font-semibold'

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-3'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <span className='text-2xl md:text-3xl font-medium'></span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <NavLinks
              items={navItems}
              activeSection={activeSection}
              onClick={scrollToSection}
              className='ml-10 flex items-baseline space-x-4'
              linkBase={linkBase}
              activeClassName={active}
              inactiveClassName={inactive}
            />
          </div>

          {/* Desktop Actions */}
          <DesktopActions
            darkMode={darkMode}
            onToggleTheme={() => setDarkMode(!darkMode)}
          />

          {/* Mobile Actions */}
          <MobileActions
            darkMode={darkMode}
            onToggleTheme={() => setDarkMode(!darkMode)}
            isMenuOpen={isMenuOpen}
            onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <MobileMenu
            items={navItems}
            activeSection={activeSection}
            onNavClick={scrollToSection}
          />
        )}
      </div>
    </nav>
  )
}
