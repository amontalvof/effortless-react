import { useState } from 'react';
import { useTimeout } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const TimeoutComponent = () => {
    const [count, setCount] = useState<number>(10);
    const { clear, reset } = useTimeout<() => void>(() => setCount(0), 5000);
    return (
        <StyledContainer>
            <h1>{count}</h1>
            <StyledButton onClick={() => setCount((c) => c + 1)}>
                Increment
            </StyledButton>
            <StyledButton onClick={clear}>Clear</StyledButton>
            <StyledButton onClick={reset}>Reset</StyledButton>
        </StyledContainer>
    );
};

export default TimeoutComponent;
