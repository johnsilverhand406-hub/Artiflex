import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { COLLECTIONS, PROJECTS } from '../data';

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const collection = COLLECTIONS.find(c => c.id === id);
  
  const projects = useMemo(() => {
    return PROJECTS.filter(p => p.collectionId === id);
  }, [id]);

  if (!collection) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Коллекция не найдена</h2>
        <button onClick={() => navigate('/')} className="text-neutral-500 underline">
          Вернуться на главную
        </button>
      </div>
    );
  }

  return (
    <div className="pb-8">
       <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="flex items-center py-3 px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group px-2 py-2 -ml-2 rounded-xl hover:bg-neutral-100 transition-colors duration-200 active:scale-95"
          >
            <ArrowLeft size={22} className="text-neutral-900" />
            <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
              Назад
            </span>
          </button>
          <span className="ml-2 font-bold text-lg truncate">{collection.title}</span>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-4"
      >
        {/* Hero Section for Collection */}
        <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
          <img 
            src={collection.image} 
            alt={collection.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end p-6">
             <h1 className="text-3xl font-extrabold text-white tracking-tight">
               {collection.title}
             </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
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
        </div>
      </motion.div>
    </div>
  );
};

export default CollectionPage;