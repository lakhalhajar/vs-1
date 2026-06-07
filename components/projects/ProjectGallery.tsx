"use client"
import React, { useState } from 'react';

type Props = {
  images: string[];
  title?: string;
};

export default function ProjectGallery({ images = [], title }: Props) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="project-gallery" aria-label={`Image gallery for ${title}`}>
      <div className="main-image" style={{ position: 'relative' }}>
        <img
          src={images[index]}
          alt={`${title} view ${index + 1}`}
          style={{ width: '100%', height: '520px', objectFit: 'cover', borderRadius: 8 }}
        />
        <button aria-label="Previous" onClick={prev} className="gallery-arrow left">
          ‹
        </button>
        <button aria-label="Next" onClick={next} className="gallery-arrow right">
          ›
        </button>
      </div>

      <div className="thumbnails" style={{ display: 'flex', gap: 10, marginTop: 12 }}>
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            aria-label={`Show image ${i + 1}`}
            style={{
              border: i === index ? '2px solid #D4AF37' : '2px solid transparent',
              padding: 0,
              borderRadius: 6,
              overflow: 'hidden',
              background: 'none',
            }}
          >
            <img src={src} alt={`thumb ${i + 1}`} style={{ width: 120, height: 80, objectFit: 'cover', display: 'block' }} />
          </button>
        ))}
      </div>

      <style jsx>{`
        .gallery-arrow{
          position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.4);color:white;border:none;padding:12px;border-radius:999px;cursor:pointer;font-size:22px
        }
        .gallery-arrow.left{left:16px}
        .gallery-arrow.right{right:16px}
      `}</style>
    </div>
  );
}
