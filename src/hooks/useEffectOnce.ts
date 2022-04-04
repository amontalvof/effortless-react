// ! 5 More Custom React Hooks You Need In Every Project
// ? Web Dev Simplified

import { EffectCallback, useEffect } from 'react';

const useEffectOnce = (cb: EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(cb, []);
};

export default useEffectOnce;
