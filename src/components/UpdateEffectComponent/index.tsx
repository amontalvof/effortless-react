import { useState } from 'react';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import { StyledButton, StyledContainer } from '../../styles';

const UpdateEffectComponent = () => {
    const [count, setCount] = useState(10);
    useUpdateEffect(() => alert(count), [count]);
    return (
        <StyledContainer>
            <h1>{count}</h1>
            <StyledButton onClick={() => setCount((c) => c + 1)}>
                Increment
            </StyledButton>
        </StyledContainer>
    );
};

export default UpdateEffectComponent;
