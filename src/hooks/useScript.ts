// ! Make React Easy With These 5 Custom React Hooks
// ? Web Dev Simplified

import useAsync from './useAsync';

const useScript = (url: string) => {
    return useAsync(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        return new Promise((resolve, reject) => {
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
            document.body.appendChild(script);
        });
    }, [url]);
};

export default useScript;