// ! 5 Custom React Hooks You Need In Every Project
// ? Web Dev Simplified

import { useEffect, useRef } from 'react';

const useUpdateEffect = (callback: any, dependencies: any[]) => {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
};

export default useUpdateEffect;
