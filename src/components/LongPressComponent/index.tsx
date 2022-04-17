import { useRef } from 'react';
import { useLongPress } from '../../hooks';
import { StyledContainer } from '../../styles';

const LongPressComponent = () => {
    const elementRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useLongPress(elementRef, () => alert('Long Press'), { delay: 1000 });

    return (
        <StyledContainer>
            <div
                ref={elementRef}
                style={{
                    cursor: 'pointer',
                    backgroundColor: '#dc143c',
                    width: '100px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '16px',
                    padding: '10px',
                }}
            >
                Long press me
            </div>
        </StyledContainer>
    );
};

export default LongPressComponent;
