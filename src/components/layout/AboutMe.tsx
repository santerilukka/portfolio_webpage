import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { User, Target, Lightbulb } from 'lucide-react'

const AboutMe = () => {
  const highlights = [
    {
      icon: User,
      title: 'Background',
      description:
        'IT & Industrial Engineering student with a passion for technology and innovation',
    },
    {
      icon: Target,
      title: 'Focus Areas',
      description:
        'Full-stack development, system optimization, and user experience design',
    },
    {
      icon: Lightbulb,
      title: 'Approach',
      description:
        'Problem-solving mindset with attention to detail and clean code practices',
    },
  ]

  const skills = [
    'Problem Solving',
    'Team Collaboration',
    'Continuous Learning',
    'Innovation',
    'Leadership',
  ]

  return (
    <section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Intro block */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl md:text-4xl font-medium mb-4'>About Me</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            I'm a dedicated student pursuing IT and Industrial Engineering, with
            a strong foundation in technology and a drive to create impactful
            solutions. My journey combines technical expertise with creative
            problem-solving to build meaningful digital experiences.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-lg transition-shadow duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-10 h-10 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center'>
                    <highlight.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold mb-3'>
                    {highlight.title}
                  </h3>
                  <p className='text-muted-foreground'>
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Strengths */}
        <motion.div
          className='text-center mt-16 md:mt-24 pt-12 pb-10 px-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className='text-xl font-semibold mb-6'>Key Strengths</h3>
          <div className='flex flex-wrap justify-center gap-6 mx-auto'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant='secondary'
                  className='px-4 py-2 text-sm transition-shadow duration-300 hover:shadow-lg'
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
