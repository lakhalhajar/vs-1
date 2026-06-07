"use client"
import React from 'react'
import { X, Instagram, Linkedin } from 'lucide-react'

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
          <div className="flex items-center gap-3">
            <a href="#" aria-label="X (Twitter)" className="text-white/90"><X /></a>
            <a href="#" aria-label="Instagram" className="text-white/90"><Instagram /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/90"><Linkedin /></a>
          </div>
          <div className="text-sm text-white/60 mt-4">© {new Date().getFullYear()} Super Construction Company. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
