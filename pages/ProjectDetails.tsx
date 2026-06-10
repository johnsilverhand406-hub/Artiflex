import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Star, MessageSquarePlus } from 'lucide-react';
import { PROJECTS } from '../data';
import ReviewModal from '../components/ReviewModal';
import { usePageMeta } from '../utils/usePageMeta';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  const project = PROJECTS.find(p => String(p.id) === id);

  usePageMeta(
    project ? `${project.title} | Artiflex` : 'Проект | Artiflex',
    project?.description
  );

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Проект не найден</h2>
        <button onClick={() => navigate('/')} className="text-muted underline">
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
    <div className="relative bg-bg min-h-full pb-8">
      {/* Review Modal */}
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
        projectTitle={project.title}
      />

      <div className="sticky top-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center py-3 px-4">
          <button
            onClick={() => navigate(-1)}
            aria-label="Назад"
            className="flex items-center gap-2 group px-2 py-2 -ml-2 rounded-xl hover:bg-surface transition-colors duration-200 active:scale-95"
          >
            <ArrowLeft size={22} className="text-text" />
            <span className="text-sm font-medium text-muted group-hover:text-text transition-colors">
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
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-surface rounded-full text-muted">
              {project.category === 'print' ? '3D Печать' : '3D Моделирование'}
            </span>
            
            {averageRating && (
              <button 
                onClick={scrollToReviews}
                className="flex items-center gap-1.5 bg-yellow-400/10 active:bg-yellow-400/20 border border-yellow-400/20 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                aria-label={`Рейтинг: ${averageRating} из 5`}
              >
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400">{averageRating}</span>
                <span className="text-xs font-medium text-yellow-400/70">({project.reviews?.length})</span>
              </button>
            )}
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-text">
            {project.title}
          </h1>
        </div>

        {project.description && (
          <div className="prose prose-lg prose-neutral mb-8 px-4">
            <p className="text-muted text-lg leading-relaxed font-medium">
              {project.description}
            </p>
          </div>
        )}

        <div className="space-y-4 px-4 mb-4">
          <div className="rounded-2xl overflow-hidden bg-surface shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
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
              className="rounded-2xl overflow-hidden bg-surface shadow-sm"
            >
              <img
                src={img}
                alt={`${project.title} — фото ${index + 1}`}
                loading="lazy"
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
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 bg-cta hover:bg-cta-hover text-white rounded-2xl font-bold text-lg shadow-xl shadow-black/20 active:scale-[0.98] transition-all"
          >
            <span>Хочу такой же проект</span>
            <Send size={18} className="ml-2.5" />
          </a>
        </div>

        {/* Reviews Section */}
        <div ref={reviewsRef} className="pb-8">
          <div className="px-4 mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-text flex items-center gap-2">
              Отзывы
              {project.reviews && project.reviews.length > 0 && (
                <span className="bg-surface text-muted text-xs px-2 py-1 rounded-full font-semibold">
                  {project.reviews.length}
                </span>
              )}
            </h3>
            
            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="text-xs font-bold uppercase tracking-wider text-muted bg-surface hover:bg-surface-2 hover:text-text px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5"
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
                  className="min-w-[85%] sm:min-w-[320px] snap-center bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-text">{review.author}</span>
                      <span className="text-xs font-medium text-muted">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-faint text-faint'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-2 flex-shrink-0" /> {/* Spacer for right padding */}
            </div>
          ) : (
            <div className="px-4 py-8 text-center bg-surface mx-4 rounded-2xl border border-border">
              <p className="text-muted text-sm mb-3">Пока нет отзывов. Будьте первым!</p>
              <button 
                onClick={() => setIsReviewModalOpen(true)}
                className="text-accent font-bold text-sm underline decoration-border underline-offset-4"
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