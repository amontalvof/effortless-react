// ! Every Big React App Needs These 5 Custom Hooks
// ? Web Dev Simplified

import { useEffect } from 'react';
import useMediaQuery from './useMediaQuery';
import { useLocalStorage } from './useStorage';

const useDarkMode = (element: any) => {
    const container = document.querySelector(element);
    const [darkMode, setDarkMode] = useLocalStorage('useDarkMode');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const enabled = darkMode ?? prefersDarkMode;
    useEffect(() => {
        container?.classList.toggle('dark-mode', enabled);
    }, [container, enabled]);

    return [enabled, setDarkMode];
};

export default useDarkMode;
