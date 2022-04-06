// ! Every Big React App Needs These 5 Custom Hooks
// ? Web Dev Simplified

import useEventListener from './useEventListener';

const useClickOutside = (ref: any, cb: any) => {
    useEventListener(
        'click',
        (e: any) => {
            if (ref.current == null || ref.current.contains(e.target)) return;
            cb(e);
        },
        document
    );
};

export default useClickOutside;
