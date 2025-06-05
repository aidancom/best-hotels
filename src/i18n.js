import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../public/locales/en/translation.json';
import translationES from '../public/locales/es/translation.json';

// Cargamos las traducciones y asignamos sus keys
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

// Inicializamos i18next con los plugins: 
// 1) LanguageDetector para detectar automáticamente el idioma (por ruta o navegador)
// 2) initReactI18next para conectar i18next con React
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Objeto con los idiomas y sus traducciones
    resources,
    // Idioma a usar si no se detecta automáticamente
    fallbackLng: 'es',
    // Configuración de detección de idioma
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0,
    },
    // Configuración de interpolación (cómo manejar variables en textos)
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
