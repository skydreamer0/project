import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths
} from 'date-fns';

interface CalendarProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onChange }) => {
  const [currentMonth, setCurrentMonth] = React.useState(startOfMonth(selectedDate));
  
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <div
            key={day}
            className="h-8 flex items-center justify-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);

          return (
            <motion.button
              key={day.toISOString()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange(day)}
              className={`
                h-8 rounded-full flex items-center justify-center text-sm
                ${isSelected ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}
                ${!isCurrentMonth && 'text-gray-300'}
              `}
            >
              {format(day, 'd')}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};