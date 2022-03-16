import { useState } from 'react';
import { usePrevious } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const PreviousComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Kyle');
    const previousCount = usePrevious(count);

    return (
        <StyledContainer>
            <h1>
                {count} - {previousCount}
            </h1>
            <h1>{name}</h1>
            <StyledButton
                onClick={() => setCount((currentCount) => currentCount + 1)}
            >
                Increment
            </StyledButton>
            <StyledButton onClick={() => setName('John')}>
                Change Name
            </StyledButton>
        </StyledContainer>
    );
};

export default PreviousComponent;
