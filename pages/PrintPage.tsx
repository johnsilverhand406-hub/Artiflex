import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gem, Settings, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../utils/usePageMeta';

const OPTIONS = [
  { label: 'SLA', sub: 'если важна детализация', Icon: Gem, to: '/print/sla' },
  { label: 'FDM', sub: 'если важна функциональность', Icon: Settings, to: '/print/fdm' },
];

const PrintPage: React.FC = () => {
  usePageMeta(
    '3D-печать SLA и FDM | Artiflex',
    'Студия 3D-печати в Коврове. SLA — для детализации, FDM — для функциональных изделий. от 500 ₽.'
  );
  const navigate = useNavigate();

  return (
    <div className="pt-6 pb-8">
      <button
        onClick={() => navigate('/')}
        aria-label="На главную"
        className="flex items-center gap-1.5 text-muted hover:text-text transition-colors text-sm mb-6"
      >
        <ArrowLeft size={18} /> Главная
      </button>

      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-text">3D-Печать</h1>
        <p className="text-muted mt-2 text-lg leading-relaxed">Выберите технологию под вашу задачу.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {OPTIONS.map(({ label, sub, Icon, to }) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.02, borderColor: '#c5d8ed' }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => navigate(to)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') navigate(to); }}
            className="border border-border bg-surface rounded-2xl p-8 cursor-pointer flex flex-col items-start gap-3 active:scale-[0.99] outline-none"
          >
            <Icon size={48} className="text-accent" />
            <h2 className="text-text text-2xl font-bold">{label}</h2>
            <p className="text-muted">{sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PrintPage;
