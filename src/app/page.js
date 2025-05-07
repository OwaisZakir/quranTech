import AboutSection from '@/components/About/AboutSection'
import HeroSection from '@/components/Hero/HeroSection'
import React from 'react'

function page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <script src="https://webkeyz.github.io/stand-with-palestine/dist/stand-with-palestine-widget.js"></script>
    </>
  )
}

export default page