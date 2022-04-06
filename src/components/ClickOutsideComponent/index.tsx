import { useRef, useState } from 'react';
import { useClickOutside } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const ClickOutsideComponent = () => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef() as React.MutableRefObject<any>;

    useClickOutside(modalRef, () => {
        if (open) setOpen(false);
    });

    return (
        <StyledContainer style={{ height: '500px' }}>
            <StyledButton onClick={() => setOpen(true)}>Open</StyledButton>
            <div
                ref={modalRef}
                style={{
                    display: open ? 'block' : 'none',
                    backgroundColor: 'white',
                    color: 'black',
                    width: '500px',
                    height: '400px',
                    position: 'absolute',
                    borderRadius: '4px',
                    padding: '0 20px',
                }}
            >
                <h3>Modal</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus hic architecto quas suscipit natus dolores,
                    quos laboriosam exercitationem cupiditate minima,
                    repellendus nesciunt asperiores deleniti qui autem ex quo,
                    libero laudantium!
                </p>
            </div>
        </StyledContainer>
    );
};

export default ClickOutsideComponent;
