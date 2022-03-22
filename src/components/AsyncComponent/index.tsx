import { useAsync } from '../../hooks';
import { StyledContainer } from '../../styles';

const AsyncComponent = () => {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = Math.random() >= 0.5;
            setTimeout(() => {
                success ? resolve('Hi') : reject('Error');
            }, 3000);
        });
    });

    return (
        <StyledContainer>
            <h1>Loading: {loading.toString()}</h1>
            <h1>{error}</h1>
            <h1>{value}</h1>
        </StyledContainer>
    );
};

export default AsyncComponent;
