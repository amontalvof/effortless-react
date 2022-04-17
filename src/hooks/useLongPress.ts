// ! Save Hours Debugging With These React Hooks
// ? Web Dev Simplified

import useEventListener from './useEventListener';
import useTimeout from './useTimeout';
import useEffectOnce from './useEffectOnce';

const useLongPress = (ref: any, cb: Function, { delay = 250 } = {}) => {
    const { reset, clear } = useTimeout(cb, delay);
    useEffectOnce(clear);

    useEventListener('mousedown', reset, ref.current);
    useEventListener('touchstart', reset, ref.current);

    useEventListener('mouseup', clear, ref.current);
    useEventListener('mouseleave', clear, ref.current);
    useEventListener('touchend', clear, ref.current);
};

export default useLongPress;
