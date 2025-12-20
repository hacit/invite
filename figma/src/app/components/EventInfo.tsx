import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function EventInfo() {
  const eventDate = new Date('2025-01-15');
  const [dDay, setDDay] = useState(0);

  useEffect(() => {
    const calculateDDay = () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const eventDateTime = new Date(eventDate);
      eventDateTime.setHours(0, 0, 0, 0);
      
      const diffTime = eventDateTime.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDDay(diffDays);
    };

    calculateDDay();
    // 자정마다 업데이트
    const interval = setInterval(calculateDDay, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const getDDayText = () => {
    if (dDay > 0) return `D-${dDay}`;
    if (dDay === 0) return 'D-DAY';
    return `D+${Math.abs(dDay)}`;
  };

  return (
    <motion.div 
      className="py-8 px-6 bg-gradient-to-br from-amber-50 to-orange-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">날짜</p>
              <p className="text-gray-800">2025년 1월 15일 토요일</p>
            </div>
          </motion.div>

          <div className="border-t border-gray-100"></div>

          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">시간</p>
              <p className="text-gray-800">오후 1시</p>
            </div>
          </motion.div>
        </div>

        {/* D-Day Counter */}
        <motion.div 
          className="mt-6 text-center"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-sm">{getDDayText()}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}