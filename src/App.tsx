import React, { useEffect } from 'react'
import { Toaster } from './components/ui/sonner'
import { Navigation } from './components/layout/Navigation'
import { Hero } from './components/layout/Hero'
import { About } from './components/layout/About'
import { TechStack } from './components/layout/TechStack'
import { Education } from './components/layout/Education'
import { Certificates } from './components/layout/Certificates'
import { Projects } from './components/layout/Projects'
import { Contact } from './components/layout/Contact'
import { Footer } from './components/layout/Footer'

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
    <div className='min-h-screen bg-background text-foreground'>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}
