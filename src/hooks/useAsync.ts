// ! Save Hours Of Work With These 5 Custom React Hooks
// ? Web Dev Simplified

import { useCallback, useEffect, useState } from 'react';

const useAsync = (callback: Function, dependencies: any[] = []) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return { loading, error, value };
};

export default useAsync;
