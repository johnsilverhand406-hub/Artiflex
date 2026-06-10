import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import WorkGallery from '../components/WorkGallery';
import ContactCTA from '../components/ContactCTA';
import { slaWorks } from '../data/works';
import { usePageMeta } from '../utils/usePageMeta';

const SLAPage: React.FC = () => {
  usePageMeta(
    'SLA-печать — примеры работ | Artiflex',
    'Фотополимерная SLA-печать от 500 ₽. Миниатюры, ювелирные изделия, сложные формы.'
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
        title="SLA — Фотополимерная печать"
        subtitle="Высочайшая детализация для миниатюр и сложных форм"
        works={slaWorks}
        cta={
          <ContactCTA
            title="Есть идея — воплотим в детали"
            description="Фотополимерная печать любой сложности — обсудим ваш проект"
          />
        }
      />
    </div>
  );
};

export default SLAPage;
