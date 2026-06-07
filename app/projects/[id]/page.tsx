import React from 'react';
import { notFound } from 'next/navigation';
import type { Project } from '../data';
import { getProjectById } from '../data';
import Container from '../../../components/Container';
import ProjectDetails from '../../../components/projects/ProjectDetails';
import dynamic from 'next/dynamic';

const ProjectGallery = dynamic(() => import('../../../components/projects/ProjectGallery'));
const MapPlaceholder = dynamic(() => import('../../../components/projects/MapPlaceholder'));
const StickySidebar = dynamic(() => import('../../../components/projects/StickySidebar'));

type Props = {
  params: { id: string };
};

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id);
  if (!project) return notFound();

  return (
    <Container>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 28, alignItems: 'start', marginTop: 28 }}>
        <main>
          {/* Gallery */}
          <ProjectGallery images={project.images ?? [project.imageUrl]} title={project.title} />

          {/* Details */}
          <div style={{ marginTop: 22 }}>
            <ProjectDetails project={project as Project} />
          </div>

          {/* Map */}
          <div style={{ marginTop: 22 }}>
            <MapPlaceholder coords={project.coords} title={project.title} />
          </div>
        </main>

        <aside>
          <StickySidebar project={project as Project} />
        </aside>
      </div>
    </Container>
  );
}
