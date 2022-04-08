import { useCookie } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const CookieComponent = () => {
    const [value, update, remove] = useCookie('name', 'John');

    return (
        <StyledContainer>
            <h1>{value}</h1>
            <StyledButton className="btn" onClick={() => update('Sally')}>
                Change Name To Sally
            </StyledButton>
            <StyledButton className="btn" onClick={remove}>
                Delete Name
            </StyledButton>
        </StyledContainer>
    );
};

export default CookieComponent;
