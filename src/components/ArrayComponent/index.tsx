import { useArray } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const ArrayComponent = () => {
    const { array, set, push, remove, filter, update, clear } = useArray([
        1, 2, 3, 4, 5, 6,
    ]);

    return (
        <StyledContainer>
            <h1>{array.join(', ')}</h1>
            <StyledButton onClick={() => push(7)}>Add 7</StyledButton>
            <StyledButton onClick={() => update(1, 9)}>
                Change Second Element To 9
            </StyledButton>
            <StyledButton onClick={() => remove(1)}>
                Remove Second Element
            </StyledButton>
            <StyledButton onClick={() => filter((n) => n < 3)}>
                Keep Numbers Less Than 4
            </StyledButton>
            <StyledButton onClick={() => set([1, 2])}>Set To 1, 2</StyledButton>
            <StyledButton onClick={clear}>Clear</StyledButton>
        </StyledContainer>
    );
};

export default ArrayComponent;
