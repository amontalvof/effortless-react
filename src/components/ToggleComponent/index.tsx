import { useToggle } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const ToggleComponent = () => {
    const [value, toggleValue] = useToggle(false);
    return (
        <StyledContainer>
            <h1>{value.toString()}</h1>
            <StyledButton onClick={toggleValue}>Toggle</StyledButton>
            <StyledButton className="btn" onClick={() => toggleValue(true)}>
                Make true
            </StyledButton>
            <StyledButton className="btn" onClick={() => toggleValue(false)}>
                Make false
            </StyledButton>
        </StyledContainer>
    );
};

export default ToggleComponent;
