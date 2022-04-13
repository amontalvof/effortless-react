// ! Save Hours Debugging With These React Hooks
// ? Web Dev Simplified

import { useEffect, useRef } from 'react';

const useRenderCount = () => {
    const count = useRef(1) as React.MutableRefObject<number>;
    useEffect(() => {
        count.current++;
        return;
    });
    return count.current;
};

export default useRenderCount;
