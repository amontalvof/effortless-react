// ! Make React Easy With These 5 Custom React Hooks
// ? Web Dev Simplified

import { useEffect, useState } from 'react';

const useOnScreen = (ref: any, rootMargin = '0px') => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (ref.current == null) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        );
        observer.observe(ref.current);
        return () => {
            if (ref.current == null) return;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.unobserve(ref.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current, rootMargin]);

    return isVisible;
};

export default useOnScreen;
