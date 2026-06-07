'use client'
import React from 'react'

const PHONE = '919876543210' // E.164 without plus for wa.me (replace with company number)
const PREFILL = encodeURIComponent('Hello Super Construction Company, I would like to enquire about your projects in Navi Mumbai.')

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${PREFILL}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Super Construction Company on WhatsApp"
      className="fixed z-50 right-6 bottom-6 bg-deep-navy text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20.5 3.5 3.5 20.5l1.9-6.8A9.7 9.7 0 0 1 4 11.5 8.5 8.5 0 0 1 20.5 3.5z" fill="#25D366" />
        <path d="M17.2 15.3c-.5-.2-2.9-1.4-3.4-1.6-.6-.2-1-.2-1.4.2-.4.4-1.7 1.6-2.1 1.9-.3.2-.7.3-1.1.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2.2-1.9-2.6-.2-.4 0-.7.2-1 .3-.5.7-1.2 1-1.6.2-.3.3-.5.5-.8.1-.3 0-.5-.1-.7-.1-.2-1.4-3.5-1.9-4.8-.5-1.3-1.1-1.4-1.6-1.4-.4 0-.9 0-1.4 0s-1 0-1.4 0c-.7 0-1.5.4-2.1 1.1-.6.8-.9 1.6-.9 2.5 0 2 .9 4.9 3 7.4 2 2.5 6 4.8 10.3 4.5 1-.1 1.8-.4 2.5-.9 0 0 .2-.1.3-.2.2-.1.3-.2.4-.4.1-.2.1-.4 0-.6-.2-.6-1-1.2-1.5-1.4z" fill="#fff" />
      </svg>
    </a>
  )
}
