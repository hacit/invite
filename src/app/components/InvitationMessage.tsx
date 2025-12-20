import { motion } from 'motion/react';

export function InvitationMessage() {
  return (
    <motion.div 
      className="py-10 px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-sm mx-auto">
        <p className="text-gray-600 mb-2">초대합니다</p>
        
        <div className="my-6 space-y-3 text-gray-700">
          <p>
            세상에 나온 지 365일,
          </p>
          <p>
            하루하루가 기쁨과 감사였습니다.
          </p>
          <p className="mt-4">
            첫 돌의 기쁨을 함께 나누고자
            <br />
            소중한 분들을 초대합니다.
          </p>
          <p className="mt-4">
            귀한 시간 내어 자리를 빛내 주시면
            <br />
            감사하겠습니다.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            아빠 하진수 · 엄마 권다이의 딸
          </p>
          <p className="text-gray-800 mt-2">
            하 율
          </p>
        </div>
      </div>
    </motion.div>
  );
}
