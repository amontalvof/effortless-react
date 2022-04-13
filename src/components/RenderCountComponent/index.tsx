import { useToggle, useRenderCount } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const RenderCountComponent = () => {
    const [boolean, toggle] = useToggle(false);

    const renderCount = useRenderCount();

    return (
        <StyledContainer>
            <h1>{boolean.toString()}</h1>
            <h1>render: {renderCount}</h1>
            <StyledButton className="btn" onClick={toggle}>
                Toggle
            </StyledButton>
        </StyledContainer>
    );
};

export default RenderCountComponent;
