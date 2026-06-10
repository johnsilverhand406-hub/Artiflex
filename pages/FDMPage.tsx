import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import WorkGallery from '../components/WorkGallery';
import ContactCTA from '../components/ContactCTA';
import { fdmWorks } from '../data/works';
import { usePageMeta } from '../utils/usePageMeta';

const FDMPage: React.FC = () => {
  usePageMeta(
    'FDM-печать — функциональные изделия | Artiflex',
    'Прочная FDM-печать PLA, PETG, ABS, Nylon от 500 ₽. Подставки, светильники, детали.'
  );

  return (
    <div className="pt-6 pb-8">
      <Link
        to="/print"
        className="flex items-center gap-1.5 text-muted hover:text-text transition-colors text-sm mb-6"
      >
        <ArrowLeft size={18} /> 3D-Печать
      </Link>
      <WorkGallery
        title="FDM — Функциональная печать"
        subtitle="Прочные изделия для повседневного использования"
        works={fdmWorks}
        cta={
          <ContactCTA
            title="Придумали — напечатаем"
            description="Запчасти, подставки, корпуса, крепления, светильники — любая форма под заказ"
          />
        }
      />
    </div>
  );
};

export default FDMPage;
