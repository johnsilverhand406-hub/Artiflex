import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { SERVICES } from '../data';

const ServiceDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  if (!slug || !SERVICES[slug]) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Услуга не найдена</h2>
        <button onClick={() => navigate('/services')} className="text-neutral-500 underline">
          Вернуться к услугам
        </button>
      </div>
    );
  }

  const service = SERVICES[slug];
  const Icon = service.icon;

  return (
    <div className="relative bg-white min-h-full pb-8">
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="flex items-center py-3 px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 group px-2 py-2 -ml-2 rounded-xl hover:bg-neutral-100 transition-colors duration-200 active:scale-95"
          >
            <ArrowLeft size={22} className="text-neutral-900" />
            <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
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
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-neutral-200">
              <Icon size={28} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-neutral-900">
              {service.title}
            </h1>
          </div>
        </div>

        <div className="inline-flex items-center bg-neutral-100 px-4 py-2 rounded-lg mb-8">
          <span className="text-sm text-neutral-500 font-medium mr-2">Стоимость:</span>
          <span className="text-lg font-bold text-black">{service.price}</span>
        </div>

        <div className="prose prose-lg prose-neutral mb-10">
          <p className="text-neutral-600 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-6 mb-10 border border-neutral-100">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">Характеристики</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={18} className="text-black mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-neutral-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky bottom-4 z-10">
          <a
            href="https://t.me/artiflex33"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full py-4 bg-black text-white rounded-2xl font-bold text-lg shadow-xl shadow-black/10 active:scale-[0.98] transition-transform"
          >
            <span>Заказать эту услугу</span>
            <Send size={18} className="ml-2.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetails;