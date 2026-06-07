"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-deep-navy flex items-center justify-center text-white font-bold">SC</div>
          <span className="font-display text-xl">Super Construction</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-gold transition-colors">{l.label}</Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen(!open)} className="p-2 rounded">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex flex-col p-4 gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
