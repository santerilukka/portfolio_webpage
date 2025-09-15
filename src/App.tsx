import React, { useEffect } from 'react'
import { Toaster } from './components/ui/sonner'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/layout/Hero'
import AboutMe from './components/layout/AboutMe'
import { TechStack } from './components/layout/TechStack'
import Education from './components/layout/Education'
import { Certificates } from './components/layout/Certificates'
import { Projects } from './components/layout/Projects'
import { CurrentlyWorkingOn } from './components/layout/CurrentlyWorkingOn'
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

  return (
    <ClickSpark
      sparkColor='#3d72e6'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={10}
      duration={450}
      extraScale={1.2}
    >
      <div className='min-h-screen bg-background text-foreground'>
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <Hero />
          <AboutMe />
          <TechStack />
          <Education />
          <Certificates />
          <Projects />
          <CurrentlyWorkingOn />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </ClickSpark>
  )
}
