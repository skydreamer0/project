import * as React from 'react';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-amber-50/90 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo or Title Area */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <h1 className="text-xl sm:text-2xl font-bold text-amber-900">
              占卜小站
            </h1>
          </motion.div>

          {/* Right side - Language Switcher */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
