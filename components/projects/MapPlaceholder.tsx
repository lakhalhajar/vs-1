"use client"
import React from 'react';

type Props = {
  coords?: { lat: number; lng: number };
  title?: string;
};

export default function MapPlaceholder({ coords, title }: Props) {
  const mapsUrl = coords ? `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}` : 'https://www.google.com/maps';
  return (
    <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ height: 280, background: 'linear-gradient(180deg, #021226, #062033)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ textAlign: 'center', color: '#cbd5e1' }}>
          <div style={{ fontSize: 40 }}>🗺️</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 8 }}>{title || 'Project location — Navi Mumbai'}</div>
          <div style={{ color: '#9ca3af', marginTop: 6 }}>Interactive map placeholder styled for preview</div>
        </div>

        <div style={{ position: 'absolute', right: 12, bottom: 12 }}>
          <a href={mapsUrl} target="_blank" rel="noreferrer" style={{ background: '#D4AF37', color: '#041025', padding: '8px 12px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
