import { useCallback, useEffect, useRef } from 'react';

const useTimeout = <T>(
    callback: T,
    delay: number
): { reset: () => void; clear: () => void } => {
    const callbackRef = useRef(callback) as any;
    const timeoutRef = useRef(null) as any;

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { reset, clear };
};

export default useTimeout;
