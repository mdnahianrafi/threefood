import React from 'react'
import VideoSlider from './ui/VideoSlider'
import { slides } from '@/data'
const Banner = () => {
  return (
  <>
  <section className="pb-40">
  <div className="container mx-auto">
    
      <VideoSlider slides={slides} />
    </div>
  </section>
  </>
  )
}

export default Banner