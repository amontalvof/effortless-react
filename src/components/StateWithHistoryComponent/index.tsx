import { useState } from 'react';
import { useStateWithHistory } from '../../hooks';
import { ButtonsContainer, StyledButton, StyledContainer } from '../../styles';

const StateWithHistoryComponent = () => {
    const [count, setCount, { history, pointer, back, forward, go }] =
        useStateWithHistory(1);
    const [name, setName] = useState('Kyle');

    return (
        <StyledContainer>
            <h1>{count}</h1>
            <h1>{history.join(', ')}</h1>
            <h1>Pointer - {pointer}</h1>
            <h1>{name}</h1>
            <ButtonsContainer>
                <StyledButton
                    onClick={() =>
                        setCount((currentCount: number) => currentCount * 2)
                    }
                >
                    Double
                </StyledButton>
                <StyledButton
                    onClick={() =>
                        setCount((currentCount: number) => currentCount + 1)
                    }
                >
                    Increment
                </StyledButton>
                <StyledButton onClick={back}>Back</StyledButton>
                <StyledButton onClick={forward}>Forward</StyledButton>
                <StyledButton onClick={() => go(2)}>Go To Index 2</StyledButton>
                <StyledButton onClick={() => setName('John')}>
                    Change Name
                </StyledButton>
            </ButtonsContainer>
        </StyledContainer>
    );
};

export default StateWithHistoryComponent;
