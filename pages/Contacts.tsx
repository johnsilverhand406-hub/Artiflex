import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Clock, Send } from 'lucide-react';

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col h-full pb-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-8 text-[3.2rem] leading-[0.95] font-black tracking-tighter text-neutral-900 mb-10 break-words"
      >
        Давайте<br/>творить<br/>вместе.
      </motion.h1>

      <div className="space-y-2 flex-1">
        <motion.a 
          href="mailto:company420.33@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="block group"
        >
          <div className="flex items-center justify-between border-b border-neutral-200 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-lg font-bold text-neutral-900">company420.33@gmail.com</p>
              </div>
            </div>
            <ArrowUpRight className="text-neutral-300 group-hover:text-black transition-colors" />
          </div>
        </motion.a>

        <motion.a 
          href="tel:+79991234567"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block group"
        >
          <div className="flex items-center justify-between border-b border-neutral-200 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Телефон</p>
                <p className="text-lg font-bold text-neutral-900">+7 (999) 123-45-67</p>
              </div>
            </div>
            <ArrowUpRight className="text-neutral-300 group-hover:text-black transition-colors" />
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="block group"
        >
          <div className="flex items-start gap-4 border-b border-neutral-200 py-5">
            <div className="w-12 h-12 flex items-center justify-center bg-neutral-100 rounded-2xl mt-1">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Адрес</p>
              <p className="text-lg font-bold text-neutral-900 leading-tight">г. Ковров, ул. Блинова 72</p>
              <div className="flex items-center mt-2 text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md inline-flex">
                <Clock size={14} className="mr-1.5" />
                <span className="text-xs font-semibold">Ежедневно 08:00 — 20:00</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-4 pt-6"
        >
          <a 
            href="https://vk.com/artiflex33" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 h-14 rounded-2xl border border-neutral-200 hover:bg-[#0077FF] hover:border-[#0077FF] hover:text-white transition-all duration-300 group bg-white"
          >
            <svg className="w-6 h-6 fill-black group-hover:fill-white transition-colors" viewBox="0 0 24 24">
              <path d="M15.6 11.6c0.9-0.9 1.8-1.9 2.6-2.9 0.3-0.3 0.5-0.7 0.6-1.1h-2.7c-0.4 0.9-0.9 1.8-1.4 2.6 -0.2 0.3-0.4 0.6-0.6 0.8 -0.2 0.2-0.4 0.2-0.6 0.1 -0.5-0.3-0.6-1.2-0.6-1.9v-1.7c0-0.5 0-0.9-0.2-1.2 -0.2-0.3-0.6-0.5-1.1-0.5h-1.7c-0.4 0-0.7 0.1-0.9 0.4 -0.1 0.2 0 0.4 0.3 0.6 0.4 0.2 0.6 0.6 0.7 1v3.5c0 0.3 0 0.6-0.2 0.8 -0.1 0.1-0.3 0.2-0.6 0.1 -1-1.1-1.8-2.4-2.4-3.8 -0.3-0.6-0.5-1.3-0.7-2h-2.6c0.1 1.4 0.5 2.7 1.2 3.9 0.9 1.6 2.2 3 3.8 4.1 1 0.7 2.1 1.1 3.3 1.1 0.7 0 1 0 1.1-0.3 0.1-0.2 0.1-0.5 0.1-0.8v-2.2c0-0.3 0.1-0.4 0.3-0.4 0.2 0 0.4 0.1 0.6 0.3 0.7 0.7 1.3 1.5 1.9 2.3 0.2 0.3 0.5 0.5 0.9 0.5h2.6c-0.3-0.6-0.8-1.2-1.3-1.7 -0.4-0.4-0.8-0.8-1.2-1.2z" />
            </svg>
            <span className="font-bold text-sm tracking-wide">ВКонтакте</span>
          </a>
          <a 
            href="https://t.me/artiflex33" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 h-14 rounded-2xl border border-neutral-200 hover:bg-[#2AABEE] hover:border-[#2AABEE] hover:text-white transition-all duration-300 group bg-white"
          >
            <Send size={20} className="text-black group-hover:text-white transition-colors" />
            <span className="font-bold text-sm tracking-wide">Telegram</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;