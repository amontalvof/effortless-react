// ! Make React Easy With These 5 Custom React Hooks
// ? Web Dev Simplified

import { EffectCallback, useEffect, useRef } from 'react';
import isEqual from 'lodash/fp/isEqual';

const useDeepCompareEffect = (
    callback: EffectCallback,
    dependencies: any[]
) => {
    const currentDependenciesRef = useRef() as any;

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, [currentDependenciesRef.current]);
};

export default useDeepCompareEffect;
