"use client";

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import type { Project } from '../app/projects/data';

type Props = {
  project: Project;
};

const statusColors: Record<string, string> = {
  Ongoing: '#D4AF37', // Gold
  Completed: '#2ECC71', // Green
  Upcoming: '#9CA3AF', // Gray
};

export default function ProjectCard({ project }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-labelledby={`project-${project.id}-title`}
      style={{
        background: '#071029',
        color: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: '0 6px 20px rgba(2,6,23,0.6)',
        transition: 'transform 200ms ease',
      }}
    >
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hover ? 'scale(1.07)' : 'scale(1.0)',
            transition: 'transform 400ms cubic-bezier(.2,.9,.3,1)',
            display: 'block',
          }}
        />

        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(9,13,26,0.0) 0%, rgba(7,10,20,0.55) 60%, rgba(2,6,23,0.8) 100%)',
            pointerEvents: 'none',
          }}
        />

        <span
          style={{
            position: 'absolute',
            left: 12,
            top: 12,
            background: 'rgba(2,6,23,0.6)',
            color: '#FFD700',
            padding: '6px 10px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {project.category}
        </span>
      </div>

      <div style={{ padding: 16 }}>
        <h3 id={`project-${project.id}-title`} style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#F8F7F2' }}>
          {project.title}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.03)',
              padding: '6px 10px',
              borderRadius: 999,
              fontSize: 13,
              color: '#E6EDF3',
            }}
          >
            <MapPin size={16} />
            {project.location}
          </span>

          <span
            style={{
              marginLeft: 'auto',
              background: statusColors[project.status] || '#ccc',
              color: '#031022',
              padding: '6px 10px',
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {project.status}
          </span>
        </div>

        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.4, color: '#C7D0D9' }}>{project.description}</p>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
          <button
            type="button"
            style={{
              background: 'linear-gradient(90deg, #D4AF37, #B8860B)',
              color: '#041026',
              padding: '10px 14px',
              borderRadius: 10,
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 6px 18px rgba(212,175,55,0.18)',
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
