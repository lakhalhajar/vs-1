"use client"
import React, { useState } from 'react';
import type { Project } from '../../app/projects/data';

type Props = {
  project: Project;
};

export default function StickySidebar({ project }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);

  const downloadBrochure = () => {
    // Mock action — in a real app this would fetch/route to the PDF
    if (project.brochureUrl) {
      window.open(project.brochureUrl, '_blank');
    } else {
      alert('Brochure download is not available for this project.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      console.log('Inquiry sent', { projectId: project.id, ...form });
      alert('Thank you — your inquiry has been submitted. Our sales team will contact you.');
      setSending(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 900);
  };

  return (
    <aside style={{ position: 'sticky', top: 96, background: '#021226', padding: 18, borderRadius: 12, border: '1px solid rgba(255,255,255,0.03)' }}>
      <div style={{ marginBottom: 12 }}>
        <button onClick={downloadBrochure} style={{ width: '100%', background: '#D4AF37', color: '#041025', padding: '12px 16px', borderRadius: 8, fontWeight: 800, border: 'none', cursor: 'pointer' }}>
          Download Brochure
        </button>
      </div>

      <div style={{ marginTop: 6 }}>
        <h4 style={{ margin: '6px 0 12px 0' }}>Quick Inquiry</h4>
        <form onSubmit={handleSubmit}>
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: 10, borderRadius: 8, marginBottom: 8, border: '1px solid rgba(255,255,255,0.05)', background: '#041025', color: '#e6eef8' }} />
          <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={{ width: '100%', padding: 10, borderRadius: 8, marginBottom: 8, border: '1px solid rgba(255,255,255,0.05)', background: '#041025', color: '#e6eef8' }} />
          <input required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={{ width: '100%', padding: 10, borderRadius: 8, marginBottom: 8, border: '1px solid rgba(255,255,255,0.05)', background: '#041025', color: '#e6eef8' }} />
          <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ width: '100%', padding: 10, borderRadius: 8, marginBottom: 10, minHeight: 100, border: '1px solid rgba(255,255,255,0.05)', background: '#041025', color: '#e6eef8' }} />
          <button type="submit" disabled={sending} style={{ width: '100%', padding: 12, borderRadius: 8, background: '#0f1724', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.15)', fontWeight: 700 }}>
            {sending ? 'Sending…' : 'Send Inquiry'}
          </button>
        </form>
      </div>
    </aside>
  );
}
