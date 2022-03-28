// ! Make React Easy With These 5 Custom React Hooks
// ? Web Dev Simplified

import { useState } from 'react';
import useEventListener from './useEventListener';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEventListener('resize', () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });

    return windowSize;
};

export default useWindowSize;
