import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { toast } from 'sonner'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.")
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '@email.com',
      link: 'mailto:@email.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'City, State, USA',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/santerilukka',
      username: '@santerilukka',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/santerilukka',
      username: '/in/santerilukka',
    },
  ]

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>
            Get In Touch
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <Card className='p-8'>
            <h3 className='text-xl font-medium mb-6'>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your.email@example.com'
                    required
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='subject'>Subject</Label>
                <Input
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell me about your project or just say hi!'
                  rows={5}
                  required
                />
              </div>

              <Button type='submit' className='w-full'>
                <Send className='h-4 w-4 mr-2' />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-medium mb-6'>Contact Information</h3>
              <div className='space-y-4'>
                {contactInfo.map((info, index) => (
                  <div key={index} className='flex items-center space-x-4'>
                    <div className='p-3 bg-primary/10 rounded-full'>
                      <info.icon className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <p className='font-medium'>{info.label}</p>
                      <a
                        href={info.link}
                        className='text-muted-foreground hover:text-primary transition-colors'
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-xl font-medium mb-6'>Connect With Me</h3>
              <div className='space-y-4'>
                {socialLinks.map((social, index) => (
                  <div key={index} className='flex items-center space-x-4'>
                    <div className='p-3 bg-primary/10 rounded-full'>
                      <social.icon className='h-5 w-5 text-primary' />
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
                ))}
              </div>
            </div>

            <Card className='p-6 bg-secondary/20'>
              <h4 className='font-medium mb-3'>Quick Response</h4>
              <p className='text-sm text-muted-foreground mb-4'>
                I typically respond to messages within 24 hours. For urgent
                matters, feel free to reach out via phone or LinkedIn.
              </p>
              <div className='flex items-center space-x-2'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-muted-foreground'>
                  Usually responds within a day
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
