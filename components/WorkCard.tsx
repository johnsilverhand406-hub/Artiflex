import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Work } from '../data/works';

export const PlaceholderImage: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-surface-2">
    <ImageIcon size={48} className="text-faint" />
  </div>
);

const WorkCard: React.FC<{ work: Work; onClick: () => void }> = ({ work, onClick }) => {
  const [err, setErr] = useState(false);

  return (
    <button
      onClick={onClick}
      aria-label={`Открыть работу: ${work.title}`}
      className="group relative w-full aspect-square overflow-hidden rounded-2xl border border-border bg-surface-2 active:scale-[0.98] transition-transform outline-none"
    >
      {err ? (
        <PlaceholderImage />
      ) : (
        <img
          src={work.image}
          alt={work.title}
          loading="lazy"
          width={400}
          height={400}
          onError={() => setErr(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2 left-3 right-3 text-left text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity truncate">
        {work.title}
      </span>
    </button>
  );
};

export default WorkCard;
