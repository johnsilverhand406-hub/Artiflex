import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, MessageSquarePlus } from 'lucide-react';
import { Work } from '../data/works';
import ReviewItem from './ReviewItem';
import ReviewModal from './ReviewModal';

const WorkLightbox: React.FC<{ work: Work | null; onClose: () => void }> = ({ work, onClose }) => {
  const [imgErr, setImgErr] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  useEffect(() => {
    setImgErr(false);
    setReviewOpen(false);
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

  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [work, onClose]);

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
            {/* Close button — sticky, stays visible while content scrolls */}
            <div className="sticky top-0 z-20 flex justify-end p-2 bg-surface">
              <button
                onClick={onClose}
                className="text-muted hover:text-text bg-bg/60 rounded-full p-1.5 transition-colors"
                aria-label="Закрыть"
              >
                <X size={22} />
              </button>
            </div>

            {/* Photo (with placeholder fallback) */}
            {imgErr ? (
              <div className="w-full h-64 flex items-center justify-center bg-surface-2">
                <ImageIcon size={48} className="text-faint" />
              </div>
            ) : (
              <img
                src={work.image}
                alt={work.title}
                onError={() => setImgErr(true)}
                className="w-full max-h-[55vh] object-contain bg-surface-2"
              />
            )}

            {/* Reviews + leave a review */}
            {work.review && (
              <div className="p-5">
                <div className="space-y-3">
                  <p className="text-muted text-sm font-medium">Отзывы клиентов</p>
                  <ReviewItem review={work.review} />
                </div>

                <button
                  onClick={() => setReviewOpen(true)}
                  className="mt-5 w-full flex items-center justify-center gap-2 border border-border hover:border-accent bg-surface-2 text-text px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  <MessageSquarePlus size={16} /> Оставить отзыв
                </button>
              </div>
            )}
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
