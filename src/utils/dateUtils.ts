import { TimeRange } from '../types';

export const timeMap: Record<string, TimeRange> = {
  '子時': [23, 1],
  '丑時': [1, 3],
  '寅時': [3, 5],
  '卯時': [5, 7],
  '辰時': [7, 9],
  '巳時': [9, 11],
  '午時': [11, 13],
  '未時': [13, 15],
  '申時': [15, 17],
  '酉時': [17, 19],
  '戌時': [19, 21],
  '亥時': [21, 23]
};

export const getChineseTime = (hour: number): string => {
  const entries = Object.entries(timeMap);
  for (const [timeName, [start, end]] of entries) {
    if (start > end) { // Handles midnight crossing
      if (hour >= start || hour < end) return timeName;
    } else {
      if (hour >= start && hour < end) return timeName;
    }
  }
  return '子時'; // Default to midnight hour
};

export const convertToSingleDigit = (num: number): number => {
  while (num > 9) {
    num = String(num).split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return num;
};