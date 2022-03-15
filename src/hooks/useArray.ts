// ! 5 Custom React Hooks You Need In Every Project
// ? Web Dev Simplified

import { Dispatch, SetStateAction, useState } from 'react';

const useArray = (
    defaultValue: any[]
): {
    array: any[];
    set: Dispatch<SetStateAction<any[]>>;
    push: (element: any) => void;
    filter: (callback: any) => void;
    update: (index: number, newElement: any) => void;
    remove: (index: number) => void;
    clear: () => void;
} => {
    const [array, setArray] = useState(defaultValue);

    const push = (element: any) => {
        setArray((arr) => [...arr, element]);
    };

    const filter = (callback: any) => {
        setArray((arr) => arr.filter(callback));
    };

    const update = (index: number, newElement: any) => {
        setArray((arr) => [
            ...arr.slice(0, index),
            newElement,
            ...arr.slice(index + 1, arr.length),
        ]);
    };

    const remove = (index: number) => {
        setArray((arr) => [
            ...arr.slice(0, index),
            ...arr.slice(index + 1, arr.length),
        ]);
    };

    const clear = () => {
        setArray([]);
    };

    return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;
