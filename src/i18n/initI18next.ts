import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { MMKV } from 'react-native-mmkv';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en.json';
import tr from './locales/tr.json';

const storage = new MMKV();
const LANGUAGE_KEY = 'app_language';

export const initI18next = () => {
    const savedLanguage = storage.getString(LANGUAGE_KEY);
    const deviceLanguage = RNLocalize.getLocales()[0]?.languageCode;
    const initialLanguage = savedLanguage || (deviceLanguage in {tr: true, en: true} ? deviceLanguage : 'en');

    i18next
        .use(initReactI18next)
        .init({
            fallbackLng: 'en',
            lng: initialLanguage,
            resources: {
                en: { translation: en },
                tr: { translation: tr },
            },
            interpolation: {
                escapeValue: false,
            },
        });

    const originalChangeLanguage = i18next.changeLanguage.bind(i18next);
    i18next.changeLanguage = (lng: string | undefined) => {
        if (lng) storage.set(LANGUAGE_KEY, lng);
        return originalChangeLanguage(lng);
    };
};
