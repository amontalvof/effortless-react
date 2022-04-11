// ! Every Big React App Needs These 5 Custom Hooks
// ? Web Dev Simplified

import { useLocalStorage } from './useStorage';

const getNestedTranslation = (
    language: string,
    keys: string[],
    translations: any
) => {
    return keys.reduce((obj, key) => {
        return obj?.[key];
    }, translations[language]);
};

const useTranslation = (translations: any) => {
    const [language, setLanguage] = useLocalStorage('language', 'en');
    const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
        'fallbackLanguage',
        'en'
    );

    const translate = (key: string) => {
        const keys = key.split('.');

        return (
            getNestedTranslation(language, keys, translations) ||
            getNestedTranslation(fallbackLanguage, keys, translations) ||
            key
        );
    };

    return {
        language,
        setLanguage,
        fallbackLanguage,
        setFallbackLanguage,
        t: translate,
    };
};

export default useTranslation;
