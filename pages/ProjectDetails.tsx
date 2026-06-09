import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Star, MessageSquarePlus } from 'lucide-react';
import { PROJECTS } from '../data';
import ReviewModal from '../components/ReviewModal';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  const project = PROJECTS.find(p => String(p.id) === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Проект не найден</h2>
        <button onClick={() => navigate('/')} className="text-neutral-500 underline">
          Вернуться на главную
        </button>
      </div>
    );
  }

  // Calculate average rating
  const averageRating = project.reviews && project.reviews.length > 0
    ? (project.reviews.reduce((acc, r) => acc + r.rating, 0) / project.reviews.length).toFixed(1)
    : null;

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-white min-h-full pb-8">
      {/* Review Modal */}
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
        projectTitle={project.title}
      />

      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="flex items-center py-3 px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 group px-2 py-2 -ml-2 rounded-xl hover:bg-neutral-100 transition-colors duration-200 active:scale-95"
          >
            <ArrowLeft size={22} className="text-neutral-900" />
            <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
              Назад
            </span>
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-2"
      >
        <div className="px-4 mb-6">
          <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-neutral-100 rounded-full text-neutral-500">
              {project.category === 'print' ? '3D Печать' : '3D Моделирование'}
            </span>
            
            {averageRating && (
              <button 
                onClick={scrollToReviews}
                className="flex items-center gap-1.5 bg-yellow-50 active:bg-yellow-100 border border-yellow-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
              >
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-700">{averageRating}</span>
                <span className="text-xs font-medium text-yellow-600/70">({project.reviews?.length})</span>
              </button>
            )}
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900">
            {project.title}
          </h1>
        </div>

        {project.description && (
          <div className="prose prose-lg prose-neutral mb-8 px-4">
            <p className="text-neutral-600 text-lg leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
        )}

        <div className="space-y-4 px-4 mb-4">
          <div className="rounded-2xl overflow-hidden bg-neutral-100 shadow-sm">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {project.gallery?.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden bg-neutral-100 shadow-sm"
            >
              <img 
                src={img} 
                alt={`${project.title} detail ${index + 1}`} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="px-4 mt-8 mb-12">
          <a
            href="https://t.me/artiflex33"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full py-4 bg-black text-white rounded-2xl font-bold text-lg shadow-xl shadow-black/20 active:scale-[0.98] transition-transform"
          >
            <span>Хочу такой же проект</span>
            <Send size={18} className="ml-2.5" />
          </a>
        </div>

        {/* Reviews Section */}
        <div ref={reviewsRef} className="pb-8">
          <div className="px-4 mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
              Отзывы
              {project.reviews && project.reviews.length > 0 && (
                <span className="bg-neutral-100 text-neutral-500 text-xs px-2 py-1 rounded-full font-semibold">
                  {project.reviews.length}
                </span>
              )}
            </h3>
            
            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="text-xs font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 hover:bg-neutral-200 hover:text-black px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MessageSquarePlus size={16} />
              <span>Оставить отзыв</span>
            </button>
          </div>

          {project.reviews && project.reviews.length > 0 ? (
            <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 gap-3 pb-4 -mx-4 sm:mx-0">
              <div className="w-0 flex-shrink-0" /> {/* Spacer for left padding in scroll container */}
              {project.reviews.map((review) => (
                <div 
                  key={review.id}
                  className="min-w-[85%] sm:min-w-[320px] snap-center bg-neutral-50/50 backdrop-blur-sm border border-neutral-200 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-neutral-900">{review.author}</span>
                      <span className="text-xs font-medium text-neutral-400">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-neutral-200 text-neutral-200'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-2 flex-shrink-0" /> {/* Spacer for right padding */}
            </div>
          ) : (
            <div className="px-4 py-8 text-center bg-neutral-50 mx-4 rounded-2xl border border-neutral-100">
              <p className="text-neutral-400 text-sm mb-3">Пока нет отзывов. Будьте первым!</p>
              <button 
                onClick={() => setIsReviewModalOpen(true)}
                className="text-black font-bold text-sm underline decoration-neutral-300 underline-offset-4"
              >
                Написать отзыв
              </button>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
};

export default ProjectDetails;