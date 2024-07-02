import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import plTranslations from './languages/pl.json';
import enTranslations from './languages/en.json';

const i18Object = await i18n
    .use(initReactI18next)
    .init({
        lng: 'pl',
        debug: true,
        fallbackLng: 'pl',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            pl: {
                translation: plTranslations,
            },
            en: {
                translation: enTranslations,
            },
        },
    });

export default i18Object;
