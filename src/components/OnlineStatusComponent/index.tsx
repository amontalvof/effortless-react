import { useOnlineStatus } from '../../hooks';
import { StyledContainer } from '../../styles';

const OnlineStatusComponent = () => {
    const online = useOnlineStatus();

    return (
        <StyledContainer>
            <h1>Online: {online.toString()}</h1>
        </StyledContainer>
    );
};

export default OnlineStatusComponent;
