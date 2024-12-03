import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { zhTW } from './locales/zh-TW';
import { enUS } from './locales/en-US';
import { deDE } from './locales/de-DE';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'zh-TW': zhTW,
      'en-US': enUS,
      'de-DE': deDE,
    },
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;