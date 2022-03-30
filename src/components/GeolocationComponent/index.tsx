import { useGeolocation } from '../../hooks';
import { StyledContainer } from '../../styles';

const GeolocationComponent = () => {
    const {
        loading,
        error,
        data: { latitude, longitude },
    } = useGeolocation();

    return (
        <StyledContainer>
            <h2>Loading: {loading.toString()}</h2>
            <h1>latitude: {latitude}</h1>
            <h1>longitude: {longitude}</h1>
            <h2>Error: {error?.message}</h2>
        </StyledContainer>
    );
};

export default GeolocationComponent;
