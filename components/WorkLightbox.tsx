import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, MessageSquarePlus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Work } from '../data/works';
import ReviewItem from './ReviewItem';
import ReviewModal from './ReviewModal';

const WorkLightbox: React.FC<{
  work: Work | null;
  works?: Work[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  onClose: () => void;
}> = ({ work, works = [], currentIndex = -1, onIndexChange, onClose }) => {
  const [imgErr, setImgErr] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [direction, setDirection] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setImgErr(false);
    setReviewOpen(false);
    setDirection(0);
  }, [work]);

  // Lock page scroll while the lightbox is open (mobile scroll-through fix)
  useEffect(() => {
    if (work) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [work]);

  const handleNext = () => {
    if (works.length > 0 && currentIndex < works.length - 1 && onIndexChange) {
      setDirection(1);
      onIndexChange(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (works.length > 0 && currentIndex > 0 && onIndexChange) {
      setDirection(-1);
      onIndexChange(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [work, currentIndex, works, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  return (
    <>
      <AnimatePresence>
      {work && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Content (scrollable; body scroll is locked while open) */}
          <motion.div
            className="relative z-10 bg-surface rounded-2xl max-w-lg w-full border border-border max-h-[90vh] overflow-y-auto overscroll-contain no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with counter and close button */}
            <div className="sticky top-0 z-20 flex items-center justify-between p-2 bg-surface">
              <div className="flex-1" />
              {works.length > 0 && currentIndex >= 0 && (
                <span className="text-muted text-xs font-semibold select-none">
                  {currentIndex + 1} / {works.length}
                </span>
              )}
              <div className="flex-1 flex justify-end">
                <button
                  onClick={onClose}
                  className="text-muted hover:text-text bg-bg/60 rounded-full p-1.5 transition-colors"
                  aria-label="Закрыть"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Photo container with swipe support and Framer Motion sliding animations */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full max-h-[55vh] h-80 sm:h-96 bg-surface-2 flex items-center justify-center overflow-hidden select-none"
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {imgErr ? (
                  <div key="err" className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={48} className="text-faint" />
                  </div>
                ) : (
                  <motion.img
                    key={work.id}
                    src={work.image}
                    alt={work.title}
                    onError={() => setImgErr(true)}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir * 100,
                        opacity: 0
                      }),
                      center: {
                        x: 0,
                        opacity: 1
                      },
                      exit: (dir: number) => ({
                        x: -dir * 100,
                        opacity: 0
                      })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.15 }
                    }}
                    className="w-full h-full object-contain"
                  />
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              {/* Left Arrow */}
              {works.length > 0 && currentIndex > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 text-accent hover:text-white transition-colors outline-none"
                  aria-label="Предыдущая работа"
                >
                  <ChevronLeft size={28} />
                </button>
              )}

              {/* Right Arrow */}
              {works.length > 0 && currentIndex < works.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-black/40 text-accent hover:text-white transition-colors outline-none"
                  aria-label="Следующая работа"
                >
                  <ChevronRight size={28} />
                </button>
              )}
            </div>

            {/* Reviews + leave a review */}
            <div className="p-5">
              {work.review && (
                <div className="space-y-3 mb-5">
                  <p className="text-muted text-sm font-medium">Отзывы клиентов</p>
                  <ReviewItem review={work.review} />
                </div>
              )}

              <button
                onClick={() => setReviewOpen(true)}
                className="w-full flex items-center justify-center gap-2 border border-border hover:border-accent bg-surface-2 text-text px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                <MessageSquarePlus size={16} /> Оставить отзыв
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
      <ReviewModal
        isOpen={reviewOpen}
        onClose={() => setReviewOpen(false)}
        projectTitle={work?.title ?? ''}
      />
    </>
  );
};

export default WorkLightbox;
