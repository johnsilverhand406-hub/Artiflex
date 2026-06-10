import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Pencil, Maximize2, Wrench, ArrowLeft } from 'lucide-react';
import WorkGallery from '../components/WorkGallery';
import { modelingWorks } from '../data/works';
import { usePageMeta } from '../utils/usePageMeta';

const MODELING_SERVICES = [
  { Icon: RotateCcw, title: 'Реверс-инжиниринг', desc: 'Воссоздание 3D-модели по готовой физической детали или образцу.', price: 'от 500 ₽', term: 'от 3 дней' },
  { Icon: Pencil, title: 'Моделирование с нуля', desc: 'Создание 3D-модели по чертежу, эскизу или описанию.', price: 'от 500 ₽', term: 'от 3 дней' },
  { Icon: Maximize2, title: 'Изменение размеров', desc: 'Масштабирование или изменение габаритов существующей модели.', price: 'от 500 ₽', term: 'от 3 дней' },
  { Icon: Wrench, title: 'Доработка моделей', desc: 'Исправление ошибок, оптимизация под печать, ремонт геометрии.', price: 'от 500 ₽', term: 'от 3 дней' },
];

const ContactCTA: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`border border-border bg-surface rounded-2xl p-6 text-center ${className}`}>
    <h3 className="text-text text-xl font-bold">Есть задача? Обсудим</h3>
    <p className="text-muted text-sm mt-2">Опишите проект — рассчитаем стоимость и сроки</p>
    <Link
      to="/contacts"
      className="inline-flex items-center justify-center mt-4 bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
    >
      Связаться
    </Link>
  </div>
);

const TABS = [
  { id: 'price', label: 'Прайс' },
  { id: 'portfolio', label: 'Портфолио' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const ModelingPage: React.FC = () => {
  usePageMeta(
    '3D-моделирование | Artiflex',
    'Реверс-инжиниринг, моделирование с нуля, доработка моделей. от 500 ₽, от 3 дней.'
  );
  const [activeTab, setActiveTab] = useState<TabId>('price');
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

      <header className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-text">3D-Моделирование</h1>
        <p className="text-muted mt-2 leading-relaxed">Разработка моделей под печать и производство.</p>
      </header>

      {/* Tab switcher (useState, NOT router) */}
      <div className="bg-surface p-1 rounded-xl inline-flex w-full mb-6">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors z-10 ${
                isActive ? 'text-text' : 'text-muted hover:text-text'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="modelingTab"
                  className="absolute inset-0 bg-surface-2 rounded-lg"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'price' ? (
            <div className="space-y-4">
              {MODELING_SERVICES.map(({ Icon, title, desc, price, term }) => (
                <div key={title} className="border border-border bg-surface rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-2 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-text font-bold text-lg">{title}</h3>
                      <p className="text-muted text-sm mt-1 leading-relaxed">{desc}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <span className="text-accent font-semibold">{price}</span>
                        <span className="text-faint">·</span>
                        <span className="text-muted">{term}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Single contact CTA below all services */}
              <ContactCTA className="mt-2" />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Contact CTA directly under the tabs, above the gallery */}
              <ContactCTA />
              <WorkGallery works={modelingWorks} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ModelingPage;
