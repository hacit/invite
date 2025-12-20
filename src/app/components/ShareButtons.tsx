import { motion } from 'motion/react';
import { Share2, MessageCircle } from 'lucide-react';

export function ShareButtons() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '지우의 첫돌 초대장',
          text: '지우의 첫 돌잔치에 초대합니다',
          url: window.location.href
        });
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      alert('링크가 복사되었습니다: ' + window.location.href);
    }
  };

  const handleKakaoShare = () => {
    alert('카카오톡 공유 기능은 카카오 개발자 등록 후 사용 가능합니다.');
  };

  return (
    <div className="py-8 px-6 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="flex gap-3">
          <motion.button
            onClick={handleKakaoShare}
            className="flex-1 bg-amber-400 hover:bg-amber-500 text-white py-4 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>카카오톡 공유</span>
          </motion.button>

          <motion.button
            onClick={handleShare}
            className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-800 py-4 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Share2 className="w-5 h-5" />
            <span>공유하기</span>
          </motion.button>
        </div>

        <motion.p 
          className="text-center text-gray-500 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          초대장을 공유해주세요 🧸
        </motion.p>
      </div>
    </div>
  );
}