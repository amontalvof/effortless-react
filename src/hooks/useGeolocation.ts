// ! 5 More Custom React Hooks You Need In Every Project
// ? Web Dev Simplified

import { useState, useEffect } from 'react';

const useGeolocation = (
    options?: any
): { loading: boolean; error: any; data: any } => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});

    useEffect(() => {
        const successHandler = (e: any) => {
            setLoading(false);
            setError(null);
            setData(e.coords);
        };
        const errorHandler = (e: any) => {
            setError(e);
            setLoading(false);
        };
        navigator.geolocation.getCurrentPosition(
            successHandler,
            errorHandler,
            options
        );
        const id = navigator.geolocation.watchPosition(
            successHandler,
            errorHandler,
            options
        );
        return () => navigator.geolocation.clearWatch(id);
    }, [options]);

    return { loading, error, data };
};

export default useGeolocation;
