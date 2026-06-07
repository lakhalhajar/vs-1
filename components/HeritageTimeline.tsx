'use client'
import React from 'react'

const milestones = [
  { year: 1981, title: 'Founded', text: 'Super Construction Company founded — laying the foundation for a legacy in Navi Mumbai.' },
  { year: 1990, title: 'Residential Expansion', text: 'First large-scale residential project completed.' },
  { year: 2000, title: 'Commercial Portfolio', text: 'Diversified into premium commercial developments.' },
  { year: 2010, title: 'Sustainability Focus', text: 'Introduced green building practices.' },
  { year: 2015, title: 'Award-Winning Design', text: 'Won industry awards for design and quality.' },
  { year: 2021, title: '40 Years of Excellence', text: 'Celebrated 40+ years serving Navi Mumbai with premium projects.' },
  { year: 2024, title: 'Future Forward', text: 'Investing in smart homes and community-centric developments.' },
]

export default function HeritageTimeline() {
  return (
    <div className="py-8">
      <div className="relative border-l border-gray-200 pl-6">
        {milestones.map((m, idx) => (
          <div key={m.year} className="mb-10 relative">
            <span className="absolute -left-3 top-0 bg-gold rounded-full w-6 h-6 flex items-center justify-center text-white font-bold">{m.year.toString().slice(-2)}</span>
            <div className="ml-6 transform transition-transform duration-500 hover:translate-x-2">
              <h4 className="text-lg font-semibold">{m.title} <span className="text-sm text-gray-500">• {m.year}</span></h4>
              <p className="text-gray-700 mt-2">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
