import React from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type FooterQuickLink = { label: string; href: string }
type FooterSocialLink = {
  type: 'github' | 'linkedin' | 'email'
  label: string
  href: string
}

const socialIconByType: Record<FooterSocialLink['type'], React.ElementType> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
}

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const footerLinks = t('footer.quickLinks', {
    returnObjects: true,
  }) as FooterQuickLink[]
  const socialLinks = t('footer.socialLinks', {
    returnObjects: true,
  }) as FooterSocialLink[]

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
              <h3 className='text-lg font-medium'>{t('footer.brandName')}</h3>
              <p className='text-sm text-muted-foreground max-w-xs'>
                {t('footer.aboutBlurb')}
              </p>

              <div className='flex space-x-2'>
                {socialLinks.map((social, index) => {
                  const Icon = socialIconByType[social.type]
                  return (
                    <Button
                      key={`${social.type}-${index}`}
                      variant='ghost'
                      size='sm'
                      asChild
                      className='h-8 w-8 p-0'
                    >
                      <a
                        href={social.href}
                        target={social.type === 'email' ? undefined : '_blank'}
                        rel={
                          social.type === 'email'
                            ? undefined
                            : 'noopener noreferrer'
                        }
                        aria-label={social.label}
                      >
                        <Icon className='h-4 w-4' />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className='space-y-4'>
              <h3 className='text-lg font-medium'>
                {t('footer.quickLinksTitle')}
              </h3>
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
              <h3 className='text-lg font-medium'>
                {t('footer.contactTitle')}
              </h3>
              <div className='space-y-2 text-sm text-muted-foreground'>
                {/*<p>{t('footer.contact.email')}</p>
                <p>{t('footer.contact.phone')}</p>
                <p>{t('footer.contact.location')}</p>*/}
                <p>Contact me through my socials!</p>
              </div>
              {/*
              <Button variant='outline' size='sm' asChild>
                <a href={t('footer.contact.ctaHref')}>
                  {t('footer.contact.ctaLabel')}
                </a>
              </Button>
              */}
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className='py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
            <div className='flex items-center space-x-1 text-sm text-muted-foreground'>
              <span>
                {t('footer.bottom.copyrightPrefix', { year: currentYear })}{' '}
              </span>
              <Heart className='h-3 w-3 text-red-500 fill-current' />
            </div>

            <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
              <a href='#' className='hover:text-primary transition-colors'>
                {t('footer.bottom.privacyPolicy')}
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                {t('footer.bottom.termsOfService')}
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className='absolute right-4 bottom-4'>
          <Button
            variant='outline'
            size='sm'
            aria-label={t('footer.backToTopAriaLabel')}
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
