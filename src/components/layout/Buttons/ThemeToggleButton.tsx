import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../../ui/button'

type ThemeToggleButtonProps = {
  darkMode: boolean
  onToggle: () => void
  className?: string
}

export function ThemeToggleButton({
  darkMode,
  onToggle,
  className,
}: ThemeToggleButtonProps) {
  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={onToggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className={className}
      type='button'
    >
      {darkMode ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
    </Button>
  )
}
