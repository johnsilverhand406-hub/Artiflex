import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, CheckCircle, Loader2, Camera, Plus } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

interface PhotoAttachment {
  file: File;
  previewUrl: string;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, projectTitle }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [photos, setPhotos] = useState<PhotoAttachment[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs to avoid memory leaks
  const clearPhotos = () => {
    photos.forEach(photo => URL.revokeObjectURL(photo.previewUrl));
    setPhotos([]);
  };

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      // Wait for animation to finish before resetting
      const timer = setTimeout(() => {
        setRating(0);
        setHoverRating(0);
        setName('');
        setText('');
        clearPhotos();
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 300);
      return () => {
        clearTimeout(timer);
        // Ensure cleanup happens if component unmounts mid-transition
        if (isOpen) clearPhotos(); 
      };
    }
  }, [isOpen]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const remainingSlots = 3 - photos.length;
      const filesToProcess = selectedFiles.slice(0, remainingSlots);

      const newPhotos = filesToProcess.map(file => ({
        file,
        previewUrl: URL.createObjectURL(file)
      }));

      setPhotos(prev => [...prev, ...newPhotos]);
      
      // Reset input so same file can be selected again if needed (after deletion)
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removePhoto = (indexToRemove: number) => {
    setPhotos(prev => {
      const photoToRemove = prev[indexToRemove];
      URL.revokeObjectURL(photoToRemove.previewUrl);
      return prev.filter((_, index) => index !== indexToRemove);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);

    // Mock network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after success message
      setTimeout(() => {
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden relative"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 p-2 text-neutral-400 hover:text-black transition-colors z-10 rounded-full hover:bg-black/5"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">Отзыв отправлен!</h3>
                      <p className="text-neutral-500 max-w-[260px]">
                        Спасибо за ваше мнение. Отзыв появится на сайте после проверки модератором.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-neutral-900">Оставить отзыв</h3>
                        <p className="text-sm text-neutral-500 mt-1 truncate px-4">
                          {projectTitle}
                        </p>
                      </div>

                      {/* Star Rating */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              className="p-1 transition-transform active:scale-95 focus:outline-none"
                            >
                              <Star
                                size={32}
                                className={`transition-colors duration-200 ${
                                  (hoverRating || rating) >= star
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'fill-neutral-100 text-neutral-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        <p className="text-xs font-medium text-neutral-400 h-4">
                          {(hoverRating || rating) > 0 
                            ? ['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично!'][(hoverRating || rating) - 1] 
                            : 'Выберите оценку'}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5 ml-1">
                            Ваше имя
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Иван Петров"
                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-neutral-400"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="review" className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5 ml-1">
                            Ваш отзыв
                          </label>
                          <textarea
                            id="review"
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={4}
                            placeholder="Расскажите о своих впечатлениях..."
                            className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none placeholder:text-neutral-400"
                          />
                        </div>

                        {/* Photo Attachments */}
                        <div>
                           <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 ml-1">
                            Фото (макс. 3)
                          </label>
                          
                          <div className="flex flex-wrap gap-3">
                            {/* Photo Previews */}
                            <AnimatePresence>
                              {photos.map((photo, index) => (
                                <motion.div
                                  key={photo.previewUrl}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.5 }}
                                  className="relative w-20 h-20 rounded-xl overflow-hidden group border border-neutral-200"
                                >
                                  <img 
                                    src={photo.previewUrl} 
                                    alt="Preview" 
                                    className="w-full h-full object-cover"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => removePhoto(index)}
                                    className="absolute top-1 right-1 bg-black/60 text-white p-0.5 rounded-full backdrop-blur-sm hover:bg-black transition-colors"
                                  >
                                    <X size={12} />
                                  </button>
                                </motion.div>
                              ))}
                            </AnimatePresence>

                            {/* Add Photo Button */}
                            {photos.length < 3 && (
                              <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="w-20 h-20 rounded-xl border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-black hover:border-neutral-400 hover:bg-neutral-50 transition-all active:scale-95"
                              >
                                <Camera size={20} />
                                <span className="text-[10px] font-bold">Фото</span>
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  accept="image/*"
                                  multiple
                                  hidden
                                  onChange={handleFileSelect}
                                />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || rating === 0}
                        className="w-full py-3.5 bg-black text-white rounded-xl font-bold text-base shadow-lg shadow-black/20 hover:bg-neutral-800 disabled:bg-neutral-300 disabled:shadow-none disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>Отправка...</span>
                          </>
                        ) : (
                          <span>Отправить</span>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;