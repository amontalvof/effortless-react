import { useSessionStorage, useLocalStorage } from '../../hooks';
import { ButtonsContainer, StyledButton, StyledContainer } from '../../styles';

const StorageComponent = () => {
    const [name, setName, removeName] = useSessionStorage(
        'effortless-react-name',
        'Kyle'
    );
    const [age, setAge, removeAge] = useLocalStorage(
        'effortless-react-age',
        26
    );

    return (
        <StyledContainer>
            <h3>useSessionStorage, useLocalStorage</h3>
            <h1>
                {name} - {age}
            </h1>
            <ButtonsContainer>
                <StyledButton onClick={() => setName('John')}>
                    Set Name
                </StyledButton>
                <StyledButton onClick={() => setAge(40)}>Set Age</StyledButton>
                <StyledButton onClick={removeName}>Remove Name</StyledButton>
                <StyledButton onClick={removeAge}>Remove Age</StyledButton>
            </ButtonsContainer>
        </StyledContainer>
    );
};

export default StorageComponent;
