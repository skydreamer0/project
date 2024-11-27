import React, { useState } from 'react';
import { Clock8 } from 'lucide-react';
import { FortuneForm } from './components/FortuneForm';
import { FortuneResult } from './components/FortuneResult';
import { getChineseTime, convertToSingleDigit } from './utils/dateUtils';
import { calculateFortune } from './utils/fortuneUtils';
import { FortuneFormData, Fortune } from './types';

function App() {
  const [results, setResults] = useState<{
    fortunes: Fortune[];
    chineseTime: string;
  } | null>(null);

  const handleSubmit = (data: FortuneFormData) => {
    const date = new Date(data.date + 'T' + data.time);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();

    const chineseTime = getChineseTime(hour);
    const monthNumber = convertToSingleDigit(month);
    const dayNumber = convertToSingleDigit(day);
    const timeNumber = convertToSingleDigit(hour);

    const fortunes = calculateFortune(monthNumber, dayNumber, timeNumber);
    setResults({ fortunes, chineseTime });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Clock8 className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Chinese Fortune Teller
          </h1>
          <p className="text-lg text-gray-600">
            Discover your fortune based on traditional Chinese time calculations
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-8">
          <FortuneForm onSubmit={handleSubmit} />
          
          {results && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <FortuneResult
                fortunes={results.fortunes}
                chineseTime={results.chineseTime}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;