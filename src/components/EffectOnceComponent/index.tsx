import { useState } from 'react';
import { useEffectOnce } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const EffectOnceComponent = () => {
    const [count, setCount] = useState(0);

    useEffectOnce(() => alert('Hello World'));

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

export default EffectOnceComponent;
