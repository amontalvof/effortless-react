import { useMediaQuery } from '../../hooks';
import { StyledContainer } from '../../styles';

const MediaQueryComponent = () => {
    const isLarge = useMediaQuery('(min-width: 700px)');

    return (
        <StyledContainer>
            <h1>Large: {isLarge.toString()}</h1>
        </StyledContainer>
    );
};

export default MediaQueryComponent;
