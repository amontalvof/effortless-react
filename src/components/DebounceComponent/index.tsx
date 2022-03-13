import { useState } from 'react';
import { useDebounce } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const DebounceComponent = () => {
    const [count, setCount] = useState(10);
    useDebounce(() => alert(count), 1000, [count]);
    return (
        <StyledContainer>
            <h1>{count}</h1>
            <StyledButton
                className="btn"
                onClick={() => setCount((c) => c + 1)}
            >
                Increment
            </StyledButton>
        </StyledContainer>
    );
};

export default DebounceComponent;
