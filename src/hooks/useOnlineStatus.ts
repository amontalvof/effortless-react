// ! Save Hours Debugging With These React Hooks
// ? Web Dev Simplified

import { useState } from 'react';
import useEventListener from './useEventListener';

const useOnlineStatus = () => {
    const [online, setOnline] = useState(navigator.onLine);

    useEventListener('online', () => setOnline(navigator.onLine));
    useEventListener('offline', () => setOnline(navigator.onLine));

    return online;
};

export default useOnlineStatus;
