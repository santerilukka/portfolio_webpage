import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { toast } from 'sonner'

type ContactInfoI18n = {
  type: 'email' | 'phone' | 'location'
  label: string
  value: string
  link?: string
}

type SocialLinkI18n = {
  type: 'github' | 'linkedin'
  label: string
  link: string
  username: string
}

type ContactI18n = {
  title: string
  subtitle: string
  formTitle: string
  form: {
    name: { label: string; placeholder: string }
    email: { label: string; placeholder: string }
    subject: { label: string; placeholder: string }
    message: { label: string; placeholder: string }
    submit: string
    toastSuccess: string
  }
  infoTitle: string
  connectTitle: string
  contactInfo: ContactInfoI18n[]
  socialLinks: SocialLinkI18n[]
  quickResponse: {
    title: string
    description: string
    indicator: string
  }
}

const contactIconByType = {
  email: Mail,
  phone: Phone,
  location: MapPin,
} as const

const socialIconByType = {
  github: Github,
  linkedin: Linkedin,
} as const

export function Contact() {
  const { t } = useTranslation()

  const i18nData = t('contact', { returnObjects: true }) as ContactI18n

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success(i18nData.form.toastSuccess)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            {i18nData.title}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {i18nData.subtitle}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <Card className='p-8'>
            <h3 className='text-xl font-medium mb-6'>{i18nData.formTitle}</h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>{i18nData.form.name.label}</Label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={i18nData.form.name.placeholder}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email'>{i18nData.form.email.label}</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={i18nData.form.email.placeholder}
                    required
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='subject'>{i18nData.form.subject.label}</Label>
                <Input
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={i18nData.form.subject.placeholder}
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message'>{i18nData.form.message.label}</Label>
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={i18nData.form.message.placeholder}
                  rows={5}
                  required
                />
              </div>

              <Button type='submit' className='w-full'>
                <Send className='h-4 w-4 mr-2' />
                {i18nData.form.submit}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-medium mb-6'>{i18nData.infoTitle}</h3>

              <div className='space-y-4'>
                {i18nData.contactInfo.map((info, index) => {
                  const Icon = contactIconByType[info.type]
                  const href =
                    info.link ?? (info.type === 'location' ? '#' : undefined)

                  return (
                    <div key={index} className='flex items-center space-x-4'>
                      <div className='p-3 bg-primary/10 rounded-full'>
                        <Icon className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='font-medium'>{info.label}</p>
                        {href ? (
                          <a
                            href={href}
                            className='text-muted-foreground hover:text-primary transition-colors'
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className='text-muted-foreground'>{info.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className='text-xl font-medium mb-6'>
                {i18nData.connectTitle}
              </h3>

              <div className='space-y-4'>
                {i18nData.socialLinks.map((social, index) => {
                  const Icon = socialIconByType[social.type]
                  return (
                    <div key={index} className='flex items-center space-x-4'>
                      <div className='p-3 bg-primary/10 rounded-full'>
                        <Icon className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='font-medium'>{social.label}</p>
                        <a
                          href={social.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-muted-foreground hover:text-primary transition-colors'
                        >
                          {social.username}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Card className='p-6 bg-secondary/20'>
              <h4 className='font-medium mb-3'>
                {i18nData.quickResponse.title}
              </h4>
              <p className='text-sm text-muted-foreground mb-4'>
                {i18nData.quickResponse.description}
              </p>
              <div className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full' />
                <span className='text-sm text-muted-foreground'>
                  {i18nData.quickResponse.indicator}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
