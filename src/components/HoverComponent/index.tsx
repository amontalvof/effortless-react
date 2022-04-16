import { useRef } from 'react';
import { useHover } from '../../hooks';
import { StyledContainer } from '../../styles';

const HoverComponent = () => {
    const elementRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const hovered = useHover(elementRef);
    const color = hovered ? '#61DAFB' : '#DC143C';
    return (
        <StyledContainer>
            <h1>Color: {color}</h1>
            <div
                ref={elementRef}
                style={{
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: hovered ? '#61dafb' : '#dc143c',
                    width: '100px',
                    height: '100px',
                    fontSize: '16px',
                }}
            >
                Hover Me
            </div>
        </StyledContainer>
    );
};

export default HoverComponent;
