import React from 'react'
import HeritageTimeline from '../../components/HeritageTimeline'

export const metadata = {
  title: 'About Us — Super Construction Company',
  description: 'Learn about Super Construction Company — 40+ years of premium real estate and construction in Navi Mumbai since 1981.',
}

export default function About() {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-display mb-4">About Us</h2>
      <p className="text-gray-700 mb-6">Super Construction Company is a premium developer focused on quality, craftsmanship and legacy projects. Since 1981, we have delivered thoughtfully designed residential and commercial projects across Navi Mumbai.</p>

      <h3 className="text-2xl font-display mb-4">Heritage Timeline</h3>
      <HeritageTimeline />
    </section>
  )
}
