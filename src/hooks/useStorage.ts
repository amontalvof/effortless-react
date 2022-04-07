// ! Save Hours Of Work With These 5 Custom React Hooks
// ? Web Dev Simplified

import { useCallback, useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultValue?: any) => {
    return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = (key: string, defaultValue?: any) => {
    return useStorage(key, defaultValue, window.sessionStorage);
};

function useStorage(key: string, defaultValue: any, storageObject: Storage) {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}
