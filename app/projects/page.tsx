"use client";

import React, { useMemo, useState } from 'react';
import { projects as allProjects, Project } from './data';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {
  const [category, setCategory] = useState<'All' | 'Residential' | 'Commercial'>('All');
  const [status, setStatus] = useState<'All' | 'Ongoing' | 'Completed' | 'Upcoming'>('All');
  const [sort, setSort] = useState<'Newest' | 'TitleA-Z'>('Newest');

  const categories = useMemo(() => ['All', 'Residential', 'Commercial'], []);
  const statuses = useMemo(() => ['All', 'Ongoing', 'Completed', 'Upcoming'], []);

  const filtered = useMemo(() => {
    let list: Project[] = allProjects.slice();

    if (category !== 'All') list = list.filter((p) => p.category === category);
    if (status !== 'All') list = list.filter((p) => p.status === status);

    if (sort === 'TitleA-Z') list.sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'Newest') list.sort((a, b) => b.id.localeCompare(a.id));

    return list;
  }, [category, status, sort]);

  return (
    <main style={{ padding: '32px 24px', background: '#031022', minHeight: '100vh', color: '#E8EEF6' }}>
      <header style={{ maxWidth: 1200, margin: '0 auto 24px' }}>
        <h1 style={{ margin: 0, fontSize: 32, color: '#F8F7F2' }}>Projects Catalogue</h1>
        <p style={{ marginTop: 8, color: '#B9C6D6' }}>Explore our curated developments across Navi Mumbai.</p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 18,
            alignItems: 'center',
            flexWrap: 'wrap',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
            padding: 12,
            borderRadius: 12,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column', fontSize: 13 }}>
            <span style={{ fontWeight: 700, color: '#E6EDF3', marginBottom: 6 }}>Category</span>
            <select value={category} onChange={(e) => setCategory(e.target.value as any)} style={{ padding: 8, borderRadius: 8, border: 'none', background: '#071029', color: '#E8EEF6' }}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', fontSize: 13 }}>
            <span style={{ fontWeight: 700, color: '#E6EDF3', marginBottom: 6 }}>Status</span>
            <select value={status} onChange={(e) => setStatus(e.target.value as any)} style={{ padding: 8, borderRadius: 8, border: 'none', background: '#071029', color: '#E8EEF6' }}>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'flex', flexDirection: 'column', fontSize: 13 }}>
            <span style={{ fontWeight: 700, color: '#E6EDF3', marginBottom: 6 }}>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value as any)} style={{ padding: 8, borderRadius: 8, border: 'none', background: '#071029', color: '#E8EEF6' }}>
              <option value="Newest">Newest</option>
              <option value="TitleA-Z">Title A - Z</option>
            </select>
          </label>

          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button
              onClick={() => {
                setCategory('All');
                setStatus('All');
                setSort('Newest');
              }}
              style={{ padding: '8px 12px', borderRadius: 8, background: 'transparent', border: '1px solid rgba(255,255,255,0.06)', color: '#C7D0D9' }}
            >
              Reset
            </button>
          </div>
        </div>
      </header>

      <section style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid">
          {filtered.map((p) => (
            <div key={p.id} style={{ padding: 8 }}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: '#9FB0C8', marginTop: 24 }}>No projects match your filters.</p>
        )}
      </section>

      <style jsx>{`
        .grid{
          display: grid;
          grid-template-columns: repeat(1, minmax(0,1fr));
          gap: 16px;
        }

        @media (min-width: 640px){
          .grid{ grid-template-columns: repeat(2, minmax(0,1fr)); }
        }

        @media (min-width: 1024px){
          .grid{ grid-template-columns: repeat(3, minmax(0,1fr)); }
        }

        /* Deep Navy background accents */
        main{ background-image: linear-gradient(180deg, rgba(3,16,34,1) 0%, rgba(6,12,27,1) 100%); }
      `}</style>
    </main>
  );
}
