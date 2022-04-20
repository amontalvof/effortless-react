import { useCounter } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const CounterComponent = () => {
    const { counter, increment, decrement, reset } = useCounter(10);
    return (
        <StyledContainer>
            <h1>{counter}</h1>
            <div>
                <StyledButton className="btn" onClick={() => increment()}>
                    increment
                </StyledButton>
                <StyledButton className="btn" onClick={() => decrement(2)}>
                    decrement
                </StyledButton>
                <StyledButton className="btn" onClick={reset}>
                    reset
                </StyledButton>
            </div>
        </StyledContainer>
    );
};

export default CounterComponent;
