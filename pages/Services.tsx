import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../data';
import { usePageMeta } from '../utils/usePageMeta';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const servicesList = Object.values(SERVICES);
  usePageMeta(
    'Услуги — 3D-печать, сканирование, моделирование | Artiflex',
    'FDM и SLA печать, 3D-сканирование, CAD-моделирование в Коврове. Полный цикл от идеи до изделия. от 500 ₽.'
  );

  return (
    <div>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-8 pb-6"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-text">
          Услуги
        </h1>
        <p className="text-muted mt-2 text-lg leading-relaxed">
          Полный цикл производства. <br /> От идеи до физического объекта.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-surface rounded-2xl overflow-hidden"
      >
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.slug} className="group relative">
              {index > 0 && <div className="h-[1px] bg-surface-2 ml-14" />}
              <button
                onClick={() => navigate(`/services/${service.slug}`)}
                className="w-full flex items-center p-4 bg-surface active:bg-surface-2 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center text-accent mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 font-medium">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-semibold text-muted mr-2">
                    {service.price}
                  </span>
                  <ChevronRight size={16} className="text-faint group-hover:text-accent transition-colors" />
                </div>
              </button>
            </div>
          );
        })}
      </motion.div>

      <div className="mt-8 p-6 bg-surface-2 border border-border rounded-2xl text-text text-center">
        <h3 className="text-lg font-bold mb-2">Нужно сразу несколько услуг?</h3>
        <p className="text-sm text-muted mb-4">
          Сканирование, моделирование и печать — делаем под ключ
        </p>
        <Link
          to="/contacts"
          className="block w-full py-3 bg-cta text-white font-bold rounded-xl text-sm hover:bg-cta-hover transition-colors"
        >
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default Services;