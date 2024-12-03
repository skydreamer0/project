import { TimeRange, LunarDateInfo } from '../types';
import { Solar } from 'lunar-typescript';
import { toZonedTime } from 'date-fns-tz';

const timeRanges: TimeRange[] = [
  { start: '23:00', end: '00:59', name: '子時' },
  { start: '01:00', end: '02:59', name: '丑時' },
  { start: '03:00', end: '04:59', name: '寅時' },
  { start: '05:00', end: '06:59', name: '卯時' },
  { start: '07:00', end: '08:59', name: '辰時' },
  { start: '09:00', end: '10:59', name: '巳時' },
  { start: '11:00', end: '12:59', name: '午時' },
  { start: '13:00', end: '14:59', name: '未時' },
  { start: '15:00', end: '16:59', name: '申時' },
  { start: '17:00', end: '18:59', name: '酉時' },
  { start: '19:00', end: '20:59', name: '戌時' },
  { start: '21:00', end: '22:59', name: '亥時' }
];

const zodiacSigns = ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'];

export function convertToLunarDate(date: Date, timezone: string): LunarDateInfo {
  const zonedDate = timezone ? toZonedTime(date, timezone) : date;
  const solar = Solar.fromDate(zonedDate);
  const lunar = solar.getLunar();
  
  const hour = zonedDate.getHours();
  const chineseTime = getChineseTime(hour);

  // 計算生肖
  const zodiacIndex = (lunar.getYear() - 4) % 12;
  const zodiac = zodiacSigns[zodiacIndex];

  return {
    lunarYear: lunar.getYear(),
    lunarMonth: lunar.getMonth(),
    lunarDay: lunar.getDay(),
    chineseTime,
    zodiac,
    hour
  };
}

export function getChineseTime(hour: number): string {
  const normalizedHour = hour === 0 ? 24 : hour;
  const timeRange = timeRanges.find(range => {
    const [startHour] = range.start.split(':').map(Number);
    const [endHour] = range.end.split(':').map(Number);
    const normalizedEndHour = endHour === 0 ? 24 : endHour;
    return normalizedHour >= startHour && normalizedHour <= normalizedEndHour;
  });
  return timeRange?.name || '子時';
}