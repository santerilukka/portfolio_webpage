import React from 'react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import GlareHover from '../ui/effects/GlareHoverEffect'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type CertificatesProps = {
  asSection?: boolean
  className?: string
}

type CertificateI18n = {
  title: string
  issuer: string
  date: string
  credentialId: string
  status?: string
  skills: string[]
  link?: string
}

type CertificatesStatsI18n = {
  earned: { value: string; label: string }
  platforms: { value: string; label: string }
  validated: { value: string; label: string }
  active: { value: string; label: string }
}

export function Certificates({
  asSection = true,
  className = '',
}: CertificatesProps) {
  const { t } = useTranslation()

  const items = t('certificates.items', {
    returnObjects: true,
  }) as CertificateI18n[]
  const stats = t('certificates.stats', {
    returnObjects: true,
  }) as CertificatesStatsI18n

  const Inner = (
    <>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-medium mb-4'>
          {t('certificates.title')}
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='h-full'
          >
            <GlareHover
              width='100%'
              height='100%'
              background='transparent'
              borderColor='transparent'
              glareColor='#3d72e6'
              glareOpacity={0.1}
              glareAngle={-35}
              glareSize={300}
              transitionDuration={700}
              playOnce={false}
              className='rounded-md h-full'
            >
              <Card className='w-full h-full p-6 hover:shadow-lg transition-all duration-300 group flex flex-col'>
                <div className='flex items-start justify-between mb-4'>
                  <div className='p-3 bg-primary/10 rounded-full'>
                    <Award className='h-6 w-6 text-primary' />
                  </div>
                  {cert.status && (
                    <Badge variant='secondary' className='text-xs'>
                      {cert.status}
                    </Badge>
                  )}
                </div>

                <div className='space-y-4'>
                  <div>
                    <h3 className='font-medium mb-2 group-hover:text-primary transition-colors'>
                      {cert.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {cert.issuer}
                    </p>
                  </div>

                  <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                    <Calendar className='h-4 w-4' />
                    <span>{cert.date}</span>
                  </div>

                  <div>
                    <p className='text-xs text-muted-foreground mb-2'>
                      {t('certificates.credentialId')}:
                    </p>
                    <p className='text-sm font-mono bg-secondary/50 px-2 py-1 rounded text-xs'>
                      {cert.credentialId}
                    </p>
                  </div>

                  <div>
                    <p className='text-sm font-medium mb-2'>
                      {t('certificates.skillsCovered')}:
                    </p>
                    <div className='flex flex-wrap gap-1'>
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant='outline'
                          className='text-xs'
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {cert.link && (
                    <div className='pt-2'>
                      <a
                        href={cert.link}
                        className='inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors'
                      >
                        {t('certificates.view')}
                        <ExternalLink className='ml-1 h-3 w-3' />
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            </GlareHover>
          </motion.div>
        ))}
      </div>

      {/* Cert stats - to be enabled later
      
      <div className='mt-16 text-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              {stats.earned.value}
            </div>
            <div className='text-sm text-muted-foreground'>
              {stats.earned.label}
            </div>
          </div>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              {stats.platforms.value}
            </div>
            <div className='text-sm text-muted-foreground'>
              {stats.platforms.label}
            </div>
          </div>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              {stats.validated.value}
            </div>
            <div className='text-sm text-muted-foreground'>
              {stats.validated.label}
            </div>
          </div>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              {stats.active.value}
            </div>
            <div className='text-sm text-muted-foreground'>
              {stats.active.label}
            </div>
          </div>
        </div>
      </div>*/}
    </>
  )

  if (!asSection) {
    return (
      <div id='certificates' className={className}>
        {Inner}
      </div>
    )
  }

  return (
    <section id='certificates' className={`py-20 bg-background ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{Inner}</div>
    </section>
  )
}
