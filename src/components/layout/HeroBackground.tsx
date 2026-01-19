import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LightRays from '../ui/effects/LightRays'

function useDelayedTrue(delayMs: number) {
  const [value, setValue] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setValue(true), delayMs)
    return () => clearTimeout(id)
  }, [delayMs])
  return value
}

export function HeroBackground() {
  const showRays = useDelayedTrue(300)

  return (
    <>
      <div className='absolute inset-0 pointer-events-none'>
        {showRays && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'ease' }}
            className='w-full h-full'
          >
            <LightRays
              raysOrigin='top-center'
              raysColor='#0f4ed2'
              raysSpeed={0.4}
              lightSpread={2}
              rayLength={2}
              followMouse
              mouseInfluence={0}
              noiseAmount={0}
              distortion={0}
              saturation={1}
              className='mix-blend-screen'
            />
          </motion.div>
        )}
      </div>

      <motion.div
        aria-hidden
        className='pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl'
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className='pointer-events-none absolute bottom-[-6rem] right-[-6rem] w-96 h-96 rounded-full bg-secondary/30 blur-3xl'
        animate={{ scale: [1, 1.07, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className='pointer-events-none absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/30 blur-2xl'
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}
