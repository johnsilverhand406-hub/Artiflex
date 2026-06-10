import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Printer, Box } from 'lucide-react';
import { Category } from '../types';
import { usePageMeta } from '../utils/usePageMeta';
import WorkCard from '../components/WorkCard';
import WorkLightbox from '../components/WorkLightbox';
import { slaWorks, fdmWorks, modelingWorks, Work } from '../data/works';

const ENTRY_CARDS = [
  { Icon: Printer, title: '3D-Печать', sub: 'SLA и FDM — выбери формат', to: '/print' },
  { Icon: Box, title: '3D-Моделирование', sub: 'Модель по фото, чертежу, образцу', to: '/modeling' },
];

const TABS: { id: Category; label: string }[] = [
  { id: 'print', label: '3D Печать' },
  { id: 'model', label: '3D Моделирование' }
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('print');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const navigate = useNavigate();
  usePageMeta(
    'Artiflex — 3D-печать и моделирование в Коврове',
    'Студия 3D-печати SLA и FDM, 3D-моделирование. г. Ковров, ул. Ватутина 59.'
  );

  return (
    <div className="pb-8">
      <header className="flex items-center justify-center pt-4 pb-6">
        <div className="text-2xl font-black tracking-tighter">
            ARTIFLEX
        </div>
      </header>

      {/* Service entry cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {ENTRY_CARDS.map(({ Icon, title, sub, to }) => (
          <motion.div
            key={to}
            whileHover={{ scale: 1.02, borderColor: '#a8bfd4' }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => navigate(to)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') navigate(to); }}
            className="border border-border bg-surface rounded-2xl p-5 cursor-pointer flex flex-col gap-2 items-start active:scale-[0.98] transition-transform outline-none"
          >
            <Icon size={32} className="text-accent" />
            <h2 className="text-text text-lg font-bold leading-tight">{title}</h2>
            <p className="text-muted text-xs">{sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="sticky top-0 z-30 bg-bg/90 backdrop-blur-sm py-2 -mx-4 px-4 mb-2">
        <div className="bg-surface p-1 rounded-xl inline-flex w-full">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ease-out z-10
                  ${isActive ? 'text-text shadow-sm' : 'text-muted hover:text-text'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-surface-2 rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Switcher — photo galleries (reuse WorkCard + WorkLightbox) */}
      <div className="mt-6">
        {activeTab === 'print' ? (
          // SLA (left) + FDM (right) — two columns
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="space-y-3">
              <p className="text-sm text-muted font-medium">SLA</p>
              {slaWorks.map((work) => (
                <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted font-medium">FDM</p>
              {fdmWorks.map((work) => (
                <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
              ))}
            </div>
          </motion.div>
        ) : (
          // 3D modeling portfolio — single column
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3"
          >
            {modelingWorks.map((work) => (
              <WorkCard key={work.id} work={work} onClick={() => setSelectedWork(work)} />
            ))}
          </motion.div>
        )}
      </div>

      {/* Shared lightbox (rendered outside the animated/transformed content) */}
      <WorkLightbox work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  );
};

export default Home;
