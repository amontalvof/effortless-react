// ! Save Hours Of Work With These 5 Custom React Hooks
// ? Web Dev Simplified

import useAsync from './useAsync';

const DEFAULT_OPTIONS = {
    headers: { 'Content-Type': 'application/json' },
};

const useFetch = (url: string, options = {}, dependencies: any[] = []) => {
    return useAsync(() => {
        return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then((res) => {
            if (res.ok) return res.json();
            return res.json().then((json) => Promise.reject(json));
        });
    }, dependencies);
};

export default useFetch;
