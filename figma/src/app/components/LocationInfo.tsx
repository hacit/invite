import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

export function LocationInfo() {
  return (
    <motion.div 
      className="py-10 px-6 bg-gradient-to-br from-orange-50 to-amber-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-sm mx-auto">
        <h2 className="text-center text-gray-800 mb-6">오시는 길</h2>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm mb-2">장소</p>
                <p className="text-gray-800 mb-1">○○웨딩홀 3층 크리스탈홀</p>
                <p className="text-gray-500 text-sm">서울시 강남구 테헤란로 123</p>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-gray-100"></div>

          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm mb-2">연락처</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">아빠 김○○</span>
                    <a 
                      href="tel:010-1234-5678" 
                      className="text-amber-600 hover:text-amber-700 text-sm"
                    >
                      010-1234-5678
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">엄마 이○○</span>
                    <a 
                      href="tel:010-9876-5432" 
                      className="text-amber-600 hover:text-amber-700 text-sm"
                    >
                      010-9876-5432
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-600 text-sm mb-3">교통편</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• 지하철: 2호선 강남역 3번 출구 도보 5분</p>
              <p>• 버스: 강남역 정류장 하차 (146, 740, 4319)</p>
              <p>• 주차: 건물 지하 주차장 이용 가능 (3시간 무료)</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}