import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'zh-TW', name: '中文', icon: '🇹🇼' },
    { code: 'en-US', name: 'English', icon: '🇺🇸' },
    { code: 'de-DE', name: 'Deutsch', icon: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher relative">
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                   bg-gradient-to-r from-amber-50 to-amber-100 
                   border border-amber-200 shadow-md backdrop-blur-sm
                   hover:from-amber-100 hover:to-amber-200 
                   text-amber-900 font-medium
                   transition-all duration-300 ease-in-out
                   sm:px-4 sm:py-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-base sm:text-lg">{currentLanguage.icon}</span>
        <span className="text-xs sm:text-sm">{currentLanguage.name}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 sm:w-40 rounded-lg overflow-hidden
                       bg-gradient-to-b from-amber-50 to-amber-100
                       border border-amber-200 shadow-xl
                       backdrop-blur-sm"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2
                           ${i18n.language === lang.code 
                             ? 'bg-amber-200/50 text-amber-900' 
                             : 'text-amber-900 hover:bg-amber-200/30'}
                           transition-colors duration-200 ease-in-out`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base sm:text-lg">{lang.icon}</span>
                <span className="text-xs sm:text-sm">{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};