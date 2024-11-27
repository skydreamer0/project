import React from 'react';
import { Calendar } from './DatePicker/Calendar';
import { TimePicker } from './DatePicker/TimePicker';
import { LocationPicker } from './DatePicker/LocationPicker';
import { FortuneFormData } from '../types';
import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

interface FortuneFormProps {
  onSubmit: (data: FortuneFormData) => void;
}

export const FortuneForm: React.FC<FortuneFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FortuneFormData>({
    date: format(new Date(), 'yyyy-MM-dd'),
    time: format(new Date(), 'HH:mm'),
    location: '',
    timezone: 'Asia/Shanghai'
  });

  const handleDateChange = (date: Date) => {
    setFormData({
      ...formData,
      date: format(date, 'yyyy-MM-dd')
    });
  };

  const handleTimeChange = (time: string) => {
    setFormData({
      ...formData,
      time
    });
  };

  const handleLocationChange = (location: string, timezone: string) => {
    const date = new Date(`${formData.date}T${formData.time}`);
    const timeInNewZone = formatInTimeZone(date, timezone, 'HH:mm');

    setFormData({
      ...formData,
      location,
      timezone,
      time: timeInNewZone
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <Calendar
            selectedDate={new Date(formData.date)}
            onChange={handleDateChange}
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <TimePicker
            value={formData.time}
            onChange={handleTimeChange}
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <LocationPicker
          value={formData.location}
          onChange={handleLocationChange}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        Calculate Fortune
      </button>
    </form>
  );
};