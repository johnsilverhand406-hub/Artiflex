import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data';
import { usePageMeta } from '../utils/usePageMeta';
import ContactCTA from '../components/ContactCTA';

const CTA_TEXT: Record<string, { title: string; description: string }> = {
  fdm: { title: 'Готовы рассчитать вашу деталь', description: 'Напишите размеры и материал — ответим с ценой в течение дня' },
  sla: { title: 'Миниатюры/Фигурки/Сложные формы? Не проблема', description: 'Пришлите модель или эскиз — рассчитаем стоимость печати' },
  scanning: { title: 'Есть прототип — создадим модель', description: 'Привезите образец или отправьте фото — оценим сложность сканирования' },
  modeling: { title: 'Есть идея — воплотим в 3D', description: 'Опишите задачу словами или эскизом — разработаем модель под печать' },
};

// Per-service title for the features block (default "Характеристики")
const FEATURES_TITLE: Record<string, string> = {
  fdm: 'Возможности',
  sla: 'Возможности',
};

// Per-service link to the printed-works gallery (only where one exists)
const WORKS_LINK: Record<string, string> = {
  fdm: '/print/fdm',
  sla: '/print/sla',
};

const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? SERVICES[slug] : undefined;
  usePageMeta(
    service ? `${service.title} | Artiflex` : 'Услуга | Artiflex',
    service?.description
  );

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Услуга не найдена</h2>
        <button onClick={() => navigate('/services')} className="text-muted underline">
          Вернуться к услугам
        </button>
      </div>
    );
  }

  const Icon = service.icon;
  const cta = CTA_TEXT[slug ?? ''] ?? {
    title: 'Обсудим ваш проект',
    description: 'Опишите задачу — рассчитаем стоимость и сроки',
  };
  const worksLink = WORKS_LINK[slug ?? ''];

  return (
    <div className="relative bg-bg min-h-full pb-8">
      <div className="sticky top-0 z-20 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center py-3 px-4">
          <button
            onClick={() => navigate(-1)}
            aria-label="Назад"
            className="flex items-center gap-2 group px-2 py-2 -ml-2 rounded-xl hover:bg-surface transition-colors duration-200 active:scale-95"
          >
            <ArrowLeft size={22} className="text-text" />
            <span className="text-sm font-medium text-muted group-hover:text-text transition-colors">
              Назад к услугам
            </span>
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-6"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1 pr-4">
            <div className="w-14 h-14 bg-cta rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/30">
              <Icon size={28} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-text">
              {service.title}
            </h1>
          </div>
        </div>

        <div className="inline-flex items-center bg-surface-2 px-4 py-2 rounded-lg mb-8">
          <span className="text-sm text-muted font-medium mr-2">Стоимость:</span>
          <span className="text-lg font-bold text-text">{service.price}</span>
        </div>

        <div className="prose prose-lg prose-neutral mb-10">
          <p className="text-muted text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="bg-surface rounded-2xl p-6 mb-10 border border-border">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted mb-4">{FEATURES_TITLE[slug ?? ''] ?? 'Характеристики'}</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-accent mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-muted font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {worksLink && (
          <div className="mb-10">
            <Link
              to={worksLink}
              className="block w-full text-center bg-cta hover:bg-cta-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Смотреть примеры работ
            </Link>
          </div>
        )}

        <ContactCTA title={cta.title} description={cta.description} />
      </motion.div>
    </div>
  );
};

export default ServiceDetails;