import { useState } from 'react';
import { useFetch } from '../../hooks';
import { StyledButton, StyledContainer, StyledPre } from '../../styles';

const FetchComponent = () => {
    const [id, setId] = useState(1);
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {},
        [id]
    );

    return (
        <StyledContainer>
            <h1>id: {id}</h1>
            <StyledButton
                className="btn"
                onClick={() => setId((currentId) => currentId + 1)}
            >
                Increment ID
            </StyledButton>
            <h1>Loading: {loading.toString()}</h1>
            <StyledPre>{JSON.stringify(value, null, 4)}</StyledPre>
            <StyledPre>{JSON.stringify(error, null, 4)}</StyledPre>
        </StyledContainer>
    );
};

export default FetchComponent;
