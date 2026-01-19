import React from 'react'
import { Linkedin } from 'lucide-react'
import { Button } from '../../ui/button'

type LinkedinButtonProps = {
  href?: string
  className?: string
}

export function LinkedinButton({
  href = 'https://linkedin.com',
  className,
}: LinkedinButtonProps) {
  return (
    <Button variant='ghost' size='sm' asChild className={className}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <Linkedin className='h-4 w-4' />
      </a>
    </Button>
  )
}
