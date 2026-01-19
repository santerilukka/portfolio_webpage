import React from 'react'
import { Github } from 'lucide-react'
import { Button } from '../../ui/button'

type GithubButtonProps = {
  href?: string
  className?: string
}

export function GithubButton({
  href = 'https://github.com',
  className,
}: GithubButtonProps) {
  return (
    <Button variant='ghost' size='sm' asChild className={className}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <Github className='h-4 w-4' />
      </a>
    </Button>
  )
}
