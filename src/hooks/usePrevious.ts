// ! Save Hours Of Work With These 5 Custom React Hooks
// ? Web Dev Simplified

import { useRef } from 'react';

const usePrevious = (value: any) => {
    const currentRef = useRef(value);
    const previousRef = useRef();

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }

    return previousRef.current;
};

export default usePrevious;
