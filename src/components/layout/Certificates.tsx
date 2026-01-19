import React from 'react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import GlareHover from '../ui/effects/GlareHoverEffect'
import { certificates } from '../../data'
import { useTranslation } from 'react-i18next'

type CertificatesProps = {
  asSection?: boolean
  className?: string
}

export function Certificates({
  asSection = true,
  className = '',
}: CertificatesProps) {
  const { t } = useTranslation()

  const Inner = (
    <>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-medium mb-4'>
          {t('certificates.title', 'Certificates')}
        </h2>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
          {t(
            'certificates.subtitle',
            'Professional certifications and achievements that validate my skills and knowledge'
          )}
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {certificates.map((cert, index) => (
          <GlareHover
            key={index}
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
            className='rounded-md'
          >
            <Card className='w-full h-full p-6 hover:shadow-lg transition-all duration-300 group'>
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
                  <p className='text-sm text-muted-foreground'>{cert.issuer}</p>
                </div>

                <div className='flex items-center space-x-2 text-sm text-muted-foreground'>
                  <Calendar className='h-4 w-4' />
                  <span>{cert.date}</span>
                </div>

                <div>
                  <p className='text-xs text-muted-foreground mb-2'>
                    {t('certificates.credentialId', 'Credential ID')}:
                  </p>
                  <p className='text-sm font-mono bg-secondary/50 px-2 py-1 rounded text-xs'>
                    {cert.credentialId}
                  </p>
                </div>

                <div>
                  <p className='text-sm font-medium mb-2'>
                    {t('certificates.skillsCovered', 'Skills Covered')}:
                  </p>
                  <div className='flex flex-wrap gap-1'>
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
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
                      {t('certificates.view', 'View Certificate')}
                      <ExternalLink className='ml-1 h-3 w-3' />
                    </a>
                  </div>
                )}
              </div>
            </Card>
          </GlareHover>
        ))}
      </div>

      <div className='mt-16 text-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              6
            </div>
            <div className='text-sm text-muted-foreground'>
              {t('certificates.stats.earned', 'Certificates Earned')}
            </div>
          </div>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              4
            </div>
            <div className='text-sm text-muted-foreground'>
              {t('certificates.stats.platforms', 'Major Platforms')}
            </div>
          </div>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              18+
            </div>
            <div className='text-sm text-muted-foreground'>
              {t('certificates.stats.validated', 'Skills Validated')}
            </div>
          </div>
          <div>
            <div className='text-2xl md:text-3xl font-medium text-primary'>
              100%
            </div>
            <div className='text-sm text-muted-foreground'>
              {t('certificates.stats.active', 'Active Status')}
            </div>
          </div>
        </div>
      </div>
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
