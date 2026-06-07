import React from 'react';
import type { Project } from '../../app/projects/data';
import { Home, Ruler, Star, Droplet, User, MapPin, Briefcase, Layers, ShoppingCart, Phone } from 'lucide-react';

const iconMap: Record<string, any> = {
  Home,
  Ruler,
  Star,
  Droplet,
  User,
  MapPin,
  Briefcase,
  Layers,
  ShoppingCart,
  Phone,
};

type Props = {
  project: Project;
};

export default function ProjectDetails({ project }: Props) {
  return (
    <section className="project-details">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <div>
          <h1 style={{ margin: 0 }}>{project.title}</h1>
          <p style={{ margin: '6px 0', color: '#cbd5e1' }}>{project.location} • {project.category}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ background: '#D4AF37', color: '#041025', padding: '6px 10px', borderRadius: 6, fontWeight: 600 }}>{project.status}</span>
        </div>
      </header>

      <p style={{ marginTop: 18, lineHeight: 1.6 }}>{project.description}</p>

      <div style={{ marginTop: 20 }}>
        <h3 style={{ marginBottom: 12 }}>Key Features & Amenities</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          {(project.features || []).map((f) => {
            const Icon = f.icon && iconMap[f.icon] ? iconMap[f.icon] : MapPin;
            return (
              <div key={f.id} style={{ background: '#021226', padding: 12, borderRadius: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', background: '#D4AF37', color: '#041025', borderRadius: 8 }}>
                  <Icon size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{f.label}</div>
                  {f.value ? <div style={{ fontSize: 13, color: '#9ca3af' }}>{f.value}</div> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
