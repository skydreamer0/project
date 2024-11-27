import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  const hours = Array.from({ length: 24 }, (_, i) => 
    i.toString().padStart(2, '0')
  );
  const minutes = Array.from({ length: 60 }, (_, i) => 
    i.toString().padStart(2, '0')
  );

  const [selectedHour, selectedMinute] = value.split(':');

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-gray-500" />
        <h3 className="text-lg font-semibold">Select Time</h3>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Hour
          </label>
          <div className="h-48 overflow-y-auto">
            {hours.map((hour) => (
              <motion.button
                key={hour}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onChange(`${hour}:${selectedMinute}`)}
                className={`
                  w-full py-2 px-4 text-left rounded-md mb-1
                  ${hour === selectedHour ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}
                `}
              >
                {hour}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Minute
          </label>
          <div className="h-48 overflow-y-auto">
            {minutes.map((minute) => (
              <motion.button
                key={minute}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onChange(`${selectedHour}:${minute}`)}
                className={`
                  w-full py-2 px-4 text-left rounded-md mb-1
                  ${minute === selectedMinute ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}
                `}
              >
                {minute}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};