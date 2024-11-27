import React from 'react';
import { Fortune } from '../types';

interface FortuneResultProps {
  fortunes: Fortune[];
  chineseTime: string;
}

export const FortuneResult: React.FC<FortuneResultProps> = ({ fortunes, chineseTime }) => {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Chinese Time Period</h3>
        <p className="text-2xl font-bold text-indigo-600">{chineseTime}</p>
      </div>

      <div className="grid gap-4">
        {fortunes.map((fortune, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-500">
                  {index === 0 ? 'Month Fortune' : index === 1 ? 'Day Fortune' : 'Time Fortune'}
                </h4>
                <p className="text-xl font-bold text-gray-900">{fortune.symbol}</p>
              </div>
              <span className="text-2xl">{fortune.unicode}</span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Element: {fortune.element}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Trigram: {fortune.trigram}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};