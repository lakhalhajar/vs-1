'use client'
import React, { useState } from 'react'

type FormState = { name: string; email: string; phone?: string; message: string; _hp?: string }

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ name: '', email: '', phone: '', message: '', _hp: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  function validate() {
    if (!state.name.trim()) return 'Please enter your name.'
    if (!state.email.match(/^[\w-+.]+@[\w-]+\.[\w-.]+$/)) return 'Please enter a valid email.'
    if (state.message.trim().length < 10) return 'Please write a message (at least 10 characters).'
    if (state._hp) return 'Spam detected.'
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    const v = validate()
    if (v) return setError(v)
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: state.name, email: state.email, phone: state.phone, message: state.message }),
      })
      if (!res.ok) throw new Error((await res.json()).message || 'Submission failed')
      setSuccess('Thanks — your enquiry has been received. We will contact you shortly.')
      setState({ name: '', email: '', phone: '', message: '', _hp: '' })
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input name="_hp" value={state._hp} onChange={(e) => setState({ ...state, _hp: e.target.value })} tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

      <div>
        <label className="block text-sm font-medium" htmlFor="name">Name</label>
        <input id="name" className="w-full border p-2 rounded" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} required />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">Email</label>
        <input id="email" type="email" className="w-full border p-2 rounded" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} required />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="phone">Phone (optional)</label>
        <input id="phone" className="w-full border p-2 rounded" value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="message">Message</label>
        <textarea id="message" className="w-full border p-2 rounded" rows={5} value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} required />
      </div>

      <div className="flex items-center space-x-3">
        <button type="submit" disabled={loading} className="bg-deep-navy text-white px-4 py-2 rounded shadow">{loading ? 'Sending...' : 'Send Message'}</button>
        {success && <p className="text-green-600" role="status">{success}</p>}
        {error && <p className="text-red-600" role="alert">{error}</p>}
      </div>
    </form>
  )
}
