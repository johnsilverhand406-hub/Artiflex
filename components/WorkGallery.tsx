import React, { useState } from 'react';
import { Work } from '../data/works';
import WorkCard from './WorkCard';
import WorkLightbox from './WorkLightbox';

interface Props {
  works: Work[];
  title?: string;
  subtitle?: string;
  cta?: React.ReactNode;
}

/** Grid of WorkCards + shared WorkLightbox. Used by SLA, FDM and Modeling portfolio. */
const WorkGallery: React.FC<Props> = ({ works, title, subtitle, cta }) => {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <div>
      {(title || subtitle) && (
        <header className="mb-6">
          {title && <h1 className="text-3xl font-extrabold tracking-tight text-text">{title}</h1>}
          {subtitle && <p className="text-muted mt-2 leading-relaxed">{subtitle}</p>}
        </header>
      )}
      {cta && <div className="mb-6">{cta}</div>}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} onClick={() => setSelected(work)} />
        ))}
      </div>
      <WorkLightbox
        work={selected}
        works={works.slice(0, 10)}
        currentIndex={selected ? works.slice(0, 10).findIndex(w => w.id === selected.id) : -1}
        onIndexChange={(idx) => setSelected(works[idx])}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default WorkGallery;
