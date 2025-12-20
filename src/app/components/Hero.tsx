import { motion } from 'motion/react';
import heroImage from '/assets/hero-image.png';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20 px-6 text-center overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-4 left-4 w-16 h-16 bg-amber-200 rounded-full opacity-30"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-8 right-8 w-12 h-12 bg-orange-200 rounded-full opacity-30"
        animate={{
          y: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-8 left-12 w-20 h-20 bg-yellow-200 rounded-full opacity-30"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-amber-700 mb-4 tracking-wider"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          HAPPY 1st BIRTHDAY
        </motion.h1>
        
        <div className="relative inline-block my-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={heroImage}
              alt="돌잔치 주인공"
              className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-xl"
            />
          </motion.div>
          
          {/* Sparkle effect around photo */}
          <motion.div
            className="absolute -top-2 -right-2 text-3xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -left-2 text-3xl"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🧸
          </motion.div>
        </div>

        <motion.p 
          className="text-amber-900 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          우리 아기가 첫 돌을 맞이했어요
        </motion.p>
      </motion.div>
    </div>
  );
}