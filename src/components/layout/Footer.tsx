import React from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:.@email.com', label: 'Email' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className='bg-secondary/20 border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* About Section */}
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Santeri Lukka</h3>
              <p className='text-sm text-muted-foreground max-w-xs'>
                Computer Science student passionate about creating innovative
                digital solutions and learning new technologies.
              </p>
              <div className='flex space-x-2'>
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant='ghost'
                    size='sm'
                    asChild
                    className='h-8 w-8 p-0'
                  >
                    <a
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.label}
                    >
                      <social.icon className='h-4 w-4' />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Quick Links</h3>
              <nav className='flex flex-col space-y-2'>
                {footerLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors text-left'
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>Get In Touch</h3>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p>@email.com</p>
                <p>+0 (555) 123-4567</p>
                <p>City, State, COUNTRY</p>
              </div>
              <Button variant='outline' size='sm' asChild>
                <a href='#contact'>Contact Me</a>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className='py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
            <div className='flex items-center space-x-1 text-sm text-muted-foreground'>
              <span>
                © {currentYear} Santeri Lukka. Made with Figma, React and{' '}
              </span>
              <Heart className='h-3 w-3 text-red-500 fill-current' />
            </div>

            <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
              <a href='#' className='hover:text-primary transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className='absolute right-4 bottom-4'>
          <Button
            variant='outline'
            size='sm'
            aria-label='Back to top'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed bottom-4 right-4 z-50 h-10 w-10 rounded-full p-0'
          >
            ↑
          </Button>
        </div>
      </div>
    </footer>
  )
}
