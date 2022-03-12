import { useState } from 'react';

const useToggle = (defaultValue: any) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (value: any) => {
        setValue((currentValue: any) =>
            typeof value === 'boolean' ? value : !currentValue
        );
    };

    return [value, toggleValue];
};

export default useToggle;
