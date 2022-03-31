// ! 5 More Custom React Hooks You Need In Every Project
// ? Web Dev Simplified

import { useState, useCallback } from 'react';

const useStateWithValidation = (
    validationFunc: (value: any) => boolean,
    initialValue: any
) => {
    const [state, setState] = useState(initialValue);
    const [isValid, setIsValid] = useState(() => validationFunc(state));

    const onChange = useCallback(
        (nextState) => {
            const value =
                typeof nextState === 'function' ? nextState(state) : nextState;
            setState(value);
            setIsValid(validationFunc(value));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [validationFunc]
    );

    return [state, onChange, isValid];
};

export default useStateWithValidation;
