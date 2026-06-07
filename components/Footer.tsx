"use client"
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-slate-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-display text-gold">Super Construction Company</h3>
          <p className="mt-2 text-sm text-white/90">Signature developments across Navi Mumbai.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact (Navi Mumbai)</h4>
          <address className="not-italic text-sm mt-2 text-white/80">
            Plot No. 12, Palm Street<br />
            Navi Mumbai, Maharashtra<br />
            Phone: +91 22 1234 5678<br />
            Email: contact@superconstruction.example
          </address>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            {/* أيقونة X (تويتر سابقاً) كـ SVG نظيف */}
            <a href="#" aria-label="X (Twitter)" className="text-white/90 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* أيقونة انستغرام كـ SVG نظيف */}
            <a href="#" aria-label="Instagram" className="text-white/90 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            
            {/* أيقونة لينكد إن كـ SVG نظيف */}
            <a href="#" aria-label="LinkedIn" className="text-white/90 hover:text-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
          <div className="text-sm text-white/60 mt-4">© {new Date().getFullYear()} Super Construction Company. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}