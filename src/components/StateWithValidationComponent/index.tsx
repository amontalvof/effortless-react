import { useStateWithValidation } from '../../hooks';
import { StyledContainer, StyledInput } from '../../styles';

const StateWithValidationComponent = () => {
    const [username, setUsername, isValid] = useStateWithValidation(
        (name) => name.length > 5,
        ''
    );
    return (
        <StyledContainer>
            <h1>Valid: {isValid.toString()}</h1>
            <StyledInput
                placeholder="Min length 6 characters"
                id="inputName"
                error={!isValid}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </StyledContainer>
    );
};

export default StateWithValidationComponent;
