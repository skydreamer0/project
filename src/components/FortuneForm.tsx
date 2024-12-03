import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { cities } from '../data/cities';
import { FortuneFormData } from '../types';
import { zhTW } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";

export const FortuneForm: React.FC<{
  onSubmit: (data: FortuneFormData) => Promise<void> | void;
}> = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [hours, setHours] = React.useState(selectedDate.getHours());
  const [minutes, setMinutes] = React.useState(selectedDate.getMinutes());

  const { control, handleSubmit, setValue, register } = useForm<FortuneFormData>({
    defaultValues: {
      date: selectedDate.toISOString().split('T')[0],
      time: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
      location: '台北',
      timezone: 'Asia/Taipei'
    }
  });

  const updateTime = (newHours: number, newMinutes: number) => {
    const timeString = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
    setValue('time', timeString);
    setHours(newHours);
    setMinutes(newMinutes);
  };

  const adjustTime = (type: 'hours' | 'minutes', increment: boolean) => {
    if (type === 'hours') {
      const newHours = (hours + (increment ? 1 : -1) + 24) % 24;
      updateTime(newHours, minutes);
    } else {
      const newMinutes = (minutes + (increment ? 1 : -1) + 60) % 60;
      updateTime(hours, newMinutes);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* 日期選擇區塊 */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <label className="block text-lg font-medium text-amber-900 tracking-wide">
            選擇日期
          </label>
          <div className="w-full flex justify-center md:justify-start">
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => {
                    if (date) {
                      setSelectedDate(date);
                      field.onChange(date.toISOString().split('T')[0]);
                    }
                  }}
                  inline
                  locale={zhTW}
                  dateFormat="yyyy-MM-dd"
                  icon={null}
                  className="!font-medium"
                />
              )}
            />
          </div>
        </div>

        {/* 時間選擇區塊 */}
        <div className="space-y-4">
          <label className="block text-lg font-medium text-amber-900 tracking-wide mb-4">
            選擇時間
          </label>
          <div className="time-picker flex justify-center md:justify-start">
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => adjustTime('hours', true)}
                className="p-3 text-amber-600 hover:text-amber-800 focus:outline-none 
                         hover:bg-amber-100/50 rounded-lg transition-colors"
              >
                ▲
              </button>
              <div className="time-picker__display text-2xl font-medium py-2">
                {String(hours).padStart(2, '0')}
              </div>
              <button
                type="button"
                onClick={() => adjustTime('hours', false)}
                className="p-3 text-amber-600 hover:text-amber-800 focus:outline-none 
                         hover:bg-amber-100/50 rounded-lg transition-colors"
              >
                ▼
              </button>
            </div>
            <span className="time-picker__separator text-2xl font-medium px-4">:</span>
            <div className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => adjustTime('minutes', true)}
                className="p-3 text-amber-600 hover:text-amber-800 focus:outline-none 
                         hover:bg-amber-100/50 rounded-lg transition-colors"
              >
                ▲
              </button>
              <div className="time-picker__display text-2xl font-medium py-2">
                {String(minutes).padStart(2, '0')}
              </div>
              <button
                type="button"
                onClick={() => adjustTime('minutes', false)}
                className="p-3 text-amber-600 hover:text-amber-800 focus:outline-none 
                         hover:bg-amber-100/50 rounded-lg transition-colors"
              >
                ▼
              </button>
            </div>
          </div>
        </div>

        {/* 地點選擇區塊 */}
        <div className="space-y-4 md:col-span-2">
          <label className="block text-lg font-medium text-amber-900 tracking-wide">
            選擇地點
          </label>
          <select
            {...register('location')}
            className="w-full px-4 py-3 rounded-lg bg-white/80 border border-amber-200 
                     text-amber-900 font-medium
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent
                     transition-shadow"
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button
          type="submit"
          className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 
                   hover:from-amber-600 hover:to-amber-700
                   text-white font-medium rounded-lg shadow-lg
                   transform transition-all duration-200 
                   hover:scale-105 active:scale-95
                   text-lg tracking-wide"
        >
          開始占卜
        </button>
      </div>
    </form>
  );
};