// ! 5 More Custom React Hooks You Need In Every Project
// ? Web Dev Simplified

import { useState, useEffect } from 'react';

const useSize = (ref: any) => {
    const [size, setSize] = useState({});

    useEffect(() => {
        if (ref.current == null) return;
        const observer = new ResizeObserver(([entry]) =>
            setSize(entry.contentRect)
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return size;
};

export default useSize;
