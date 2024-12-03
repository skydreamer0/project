import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FortuneForm } from './components/FortuneForm';
import { FortuneResult } from './components/FortuneResult';
import { Fortune, FortuneFormData, LunarDateInfo } from './types';
import { convertToLunarDate } from './utils/dateUtils';
import { calculateFortune } from './utils/fortuneUtils';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const { t } = useTranslation();
  const [fortunes, setFortunes] = React.useState<Fortune[]>([]);
  const [chineseTime, setChineseTime] = React.useState<string>('');
  const [lunarInfo, setLunarInfo] = React.useState<LunarDateInfo | null>(null);

  const handleSubmit = (data: FortuneFormData) => {
    const date = new Date(data.date + 'T' + data.time);
    const lunarInfo = convertToLunarDate(date, data.timezone);
    
    const fortunes = calculateFortune(
      lunarInfo.lunarMonth,
      lunarInfo.lunarDay,
      lunarInfo.hour
    );

    setFortunes(fortunes);
    setChineseTime(lunarInfo.chineseTime);
    setLunarInfo(lunarInfo);
  };

  const handleReset = () => {
    setFortunes([]);
    setChineseTime('');
    setLunarInfo(null);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Background />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20 sm:pt-24 pb-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-amber-900 mb-2">
              {t('title')}
            </h1>
            <p className="text-amber-800 text-center mb-8">
              {t('subtitle')}
            </p>
          </motion.div>

          <FortuneForm onSubmit={handleSubmit} />

          <AnimatePresence mode="wait">
            {fortunes.length > 0 && (
              <motion.div
                key="fortune-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <FortuneResult
                  fortunes={fortunes}
                  chineseTime={chineseTime}
                  lunarInfo={lunarInfo}
                />
                <div className="mt-8 text-center">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center px-6 py-2 border-2 border-amber-600 rounded-lg text-amber-700 hover:bg-amber-50 transition-colors duration-200"
                  >
                    {t('recalculate')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;