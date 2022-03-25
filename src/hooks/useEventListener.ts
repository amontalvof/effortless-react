// ! Make React Easy With These 5 Custom React Hooks
// ? Web Dev Simplified

import { useEffect, useRef } from 'react';

const useEventListener = (eventType: any, callback: any, element = window) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (element == null) return;
        const handler = (e: any) => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
};

export default useEventListener;
