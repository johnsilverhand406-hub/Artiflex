import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS, COLLECTIONS } from '../data';
import { Category } from '../types';

const TABS: { id: Category; label: string }[] = [
  { id: 'print', label: '3D Печать' },
  { id: 'model', label: '3D Моделирование' }
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('print');
  const navigate = useNavigate();

  // Filter simple projects for modeling
  const modelingProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category === 'model');
  }, []);

  return (
    <div className="pb-8">
      <header className="flex items-center justify-center pt-4 pb-6">
        <div className="text-2xl font-black tracking-tighter">
            ARTIFLEX
        </div>
      </header>

      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm py-2 -mx-4 px-4 mb-2">
        <div className="bg-neutral-100 p-1 rounded-xl inline-flex w-full">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ease-out z-10
                  ${isActive ? 'text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Switcher */}
      <div className="mt-6">
        {activeTab === 'print' ? (
          // COLLECTIONS GRID
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {COLLECTIONS.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/collection/${collection.id}`)}
                className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group active:scale-[0.98] transition-transform"
              >
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{collection.title}</h3>
                      <p className="text-sm text-white/80 font-medium">{collection.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                       <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // MODELING PROJECTS GRID
          <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {modelingProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`relative group overflow-hidden rounded-2xl bg-neutral-100 ${project.span} aspect-square ${
                    project.span === 'col-span-2' ? 'aspect-[2/1] sm:aspect-[2.5/1]' : ''
                  }`}
                >
                  <Link to={`/project/${project.id}`} className="absolute inset-0 z-20 block w-full h-full" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between items-end pointer-events-none">
                    <div>
                      <h3 className={`font-semibold leading-tight ${project.span === 'col-span-2' ? 'text-xl' : 'text-sm'}`}>
                        {project.title}
                      </h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;