import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: 'assets/img_1.jpg',
    alt: '돌잔치 사진 1'
  },
  {
    id: 2,
    src: 'assets/img_2.jpg',
    alt: '돌잔치 사진 2'
  },
  {
    id: 3,
    src: 'assets/img_3.jpg',
    alt: '돌잔치 사진 3'
  },
  {
    id: 4,
    src: 'assets/img_4.jpg',
    alt: '돌잔치 사진 4'
  },
  {
    id: 5,
    src: 'assets/img_5.jpg',
    alt: '돌잔치 사진 5'
  },
  {
    id: 6,
    src: 'assets/img_6.jpg',
    alt: '돌잔치 사진 6'
  }
];

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    handlePrev();
  };

  const goToNext = () => {
    handleNext();
  };

  return (
    <div className="py-10 px-6 bg-white">
      <motion.h2 
        className="text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        성장 앨범
      </motion.h2>

      <div className="max-w-sm mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
              }}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <ImageWithFallback
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 flex items-center justify-center"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-sm">확대보기</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated decorative elements */}
        <div className="relative mt-8 text-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block text-4xl"
          >
            🧸
          </motion.div>
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="inline-block text-4xl ml-4"
          >
            🎁
          </motion.div>
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="inline-block text-4xl ml-4"
          >
            ✨
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-50 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-50 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4">
              {currentIndex + 1} / {photos.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}