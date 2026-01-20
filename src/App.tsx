import React, { useEffect } from 'react'
import { Toaster } from './components/ui/sonner'
import { Navigation } from './components/layout/Navigation'
import { Landing } from './components/layout/Landing'
import { Secondary } from './components/layout/Secondary'
import { Tertiary } from './components/layout/Tertiary'
import { Projects } from './components/layout/Projects'
import { Contact } from './components/layout/Contact'
import { Footer } from './components/layout/Footer'
import ClickSpark from './components/ui/effects/ClickSparkEffect'

export default function App() {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth'

    // Clean up on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (<p>Under maintanance!</p>) }
  
  
  
  {/* return (
    <ClickSpark
      sparkColor='#3d72e6'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={10}
      duration={450}
      extraScale={1.2}
    >
      <div className='min-h-screen bg-background text-foreground'>
        <Navigation />

        <main>
          <Landing />
          <Secondary />
          <Tertiary />
          <Projects />
          {/*<Contact />*/}
          </main>

          <Footer />
  
          <Toaster />
        </div>
      </ClickSpark>
    ) */} 
    