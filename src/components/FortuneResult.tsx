import React from 'react';
import { Fortune } from '../types';
import { motion } from 'framer-motion';

interface FortuneResultProps {
  fortunes: Fortune[];
  chineseTime: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FortuneResult: React.FC<FortuneResultProps> = ({ fortunes, chineseTime }) => {
  return (
    <div className="space-y-8">
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl font-medium text-amber-800 mb-2">時辰</h3>
        <p className="text-3xl font-bold text-amber-900">{chineseTime}</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {fortunes.map((fortune, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-lg border border-amber-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-medium text-amber-700 mb-1">
                  {index === 0 ? '月運' : index === 1 ? '日運' : '時運'}
                </h4>
                <p className="text-2xl font-bold text-amber-900">
                  {fortune.symbol}
                </p>
              </div>
              <span className="text-3xl text-amber-600">{fortune.unicode}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                {fortune.element}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                {fortune.trigram}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};