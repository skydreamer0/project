import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Loader2 } from 'lucide-react';
import { cities } from '../../data/cities';
import { City } from '../../types';

interface LocationPickerProps {
  value: string;
  onChange: (location: string, timezone: string) => void;
}

export const LocationPicker: React.FC<LocationPickerProps> = ({ value, onChange }) => {
  const [query, setQuery] = React.useState(value);
  const [suggestions, setSuggestions] = React.useState<City[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    const filtered = cities
      .filter(city => 
        city.name.toLowerCase().includes(query.toLowerCase()) ||
        city.country.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);

    // Simulate network delay
    setTimeout(() => {
      setSuggestions(filtered);
      setIsLoading(false);
    }, 300);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 animate-spin" />
        )}
      </div>

      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
          >
            {suggestions.map((city) => (
              <motion.button
                key={`${city.name}-${city.country}`}
                whileHover={{ backgroundColor: '#F3F4F6' }}
                onClick={() => {
                  onChange(city.name, city.timezone);
                  setQuery(city.name);
                  setSuggestions([]);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
              >
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <div>
                    <div className="font-medium">{city.name}</div>
                    <div className="text-sm text-gray-500">{city.country}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};