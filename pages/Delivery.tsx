import React from 'react';
import { motion } from 'framer-motion';
import { DELIVERY_STEPS } from '../data';
import { usePageMeta } from '../utils/usePageMeta';

const Delivery: React.FC = () => {
  usePageMeta(
    'Доставка по России | Artiflex',
    'Производство 1–3 дня, бережная упаковка, отправка СДЭК, Яндекс и Почтой России. Самовывоз: Ковров, ул. Ватутина 59.'
  );
  return (
    <div>
      <motion.header 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-8 pb-8"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-text mb-2">
          Доставка
        </h1>
      </motion.header>

      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-surface-2 rounded-full" />

        {DELIVERY_STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start pl-2"
            >
              <div className="relative z-10 bg-bg p-1 rounded-full">
                <div className="w-8 h-8 bg-cta text-white rounded-full flex items-center justify-center shadow-lg shadow-black/30">
                  <Icon size={14} />
                </div>
              </div>
              <div className="ml-5 pt-1">
                <h3 className="text-lg font-bold text-text">
                  {step.title}
                </h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-5 border border-border rounded-2xl bg-surface"
      >
        <p className="text-xs text-muted font-medium uppercase tracking-wider mb-2">
          Самовывоз
        </p>
        <p className="text-text font-semibold text-sm leading-relaxed">
          г. Ковров, ул. Ватутина 59<br />
          Ежедневно 10:00 — 20:00
        </p>
        <p className="text-muted text-sm mt-2">
          Можно забрать сразу после готовности — позвоним
        </p>
      </motion.div>
    </div>
  );
};

export default Delivery;