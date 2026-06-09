import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICES } from '../data';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const servicesList = Object.values(SERVICES);

  return (
    <div>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-8 pb-6"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900">
          Услуги
        </h1>
        <p className="text-neutral-500 mt-2 text-lg leading-relaxed">
          Полный цикл производства. <br /> От идеи до физического объекта.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-neutral-100 rounded-2xl overflow-hidden"
      >
        {servicesList.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.slug} className="group relative">
              {index > 0 && <div className="h-[1px] bg-neutral-200 ml-14" />}
              <button
                onClick={() => navigate(`/services/${service.slug}`)}
                className="w-full flex items-center p-4 bg-white active:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-900 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5 font-medium">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-semibold text-neutral-400 mr-2">
                    {service.price}
                  </span>
                  <ChevronRight size={16} className="text-neutral-300 group-hover:text-black transition-colors" />
                </div>
              </button>
            </div>
          );
        })}
      </motion.div>

      <div className="mt-8 p-6 bg-black rounded-2xl text-white text-center">
        <h3 className="text-lg font-bold mb-2">Индивидуальный заказ?</h3>
        <p className="text-sm text-neutral-400 mb-4">
          Опишите вашу задачу, и мы подберем оптимальную технологию.
        </p>
        <a
          href="https://t.me/artiflex33"
          target="_blank"
          rel="noreferrer"
          className="block w-full py-3 bg-white text-black font-bold rounded-xl text-sm hover:bg-neutral-200 transition-colors"
        >
          Написать менеджеру
        </a>
      </div>
    </div>
  );
};

export default Services;