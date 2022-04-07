// ! Every Big React App Needs These 5 Custom Hooks
// ? Web Dev Simplified

import { useState } from 'react';
import copy from 'copy-to-clipboard';

const useCopyToClipboard = (): [
    (text: string, options?: any) => void,
    { value: string | undefined; success: boolean | undefined }
] => {
    const [value, setValue] = useState<string>();
    const [success, setSuccess] = useState<boolean>();

    const copyToClipboard = (text: string, options?: any) => {
        const result = copy(text, options);
        if (result) setValue(text);
        setSuccess(result);
    };

    return [copyToClipboard, { value, success }];
};

export default useCopyToClipboard;
