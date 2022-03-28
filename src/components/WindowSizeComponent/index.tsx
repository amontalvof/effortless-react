import { useWindowSize } from '../../hooks';
import { StyledContainer } from '../../styles';

const WindowSizeComponent = () => {
    const { width, height } = useWindowSize();

    return (
        <StyledContainer>
            <h1>
                {width} x {height}
            </h1>
        </StyledContainer>
    );
};

export default WindowSizeComponent;
