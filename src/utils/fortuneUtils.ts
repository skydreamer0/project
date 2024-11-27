import { Fortune } from '../types';

export const fortuneMap: Record<number, Fortune> = {
  1: { symbol: '大安', element: '木', trigram: '震', unicode: '☳' },
  2: { symbol: '流連', element: '木', trigram: '巽', unicode: '☴' },
  3: { symbol: '速喜', element: '火', trigram: '離', unicode: '☲' },
  4: { symbol: '赤口', element: '金', trigram: '兌', unicode: '☱' },
  5: { symbol: '小吉', element: '水', trigram: '坎', unicode: '☵' },
  6: { symbol: '空亡', element: '土', trigram: '中', unicode: '' },
  7: { symbol: '病符', element: '土', trigram: '坤', unicode: '☷' },
  8: { symbol: '桃花', element: '土', trigram: '艮', unicode: '☶' },
  9: { symbol: '天德', element: '金', trigram: '乾', unicode: '☰' }
};

export const calculateFortune = (month: number, day: number, time: number): Fortune[] => {
  const firstResult = month % 9 || 9;
  const secondResult = (month + day) % 9 || 9;
  const thirdResult = (month + day + time) % 9 || 9;

  return [
    fortuneMap[firstResult],
    fortuneMap[secondResult],
    fortuneMap[thirdResult]
  ];
};