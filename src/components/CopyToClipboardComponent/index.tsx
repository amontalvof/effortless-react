import { useCopyToClipboard } from '../../hooks';
import { StyledButton, StyledContainer, StyledInput } from '../../styles';

const CopyToClipboardComponent = () => {
    const [copyToClipboard, { success }] = useCopyToClipboard();

    return (
        <StyledContainer>
            <p>Hello World!</p>
            <StyledButton
                className="btn"
                onClick={() => copyToClipboard('Hello World!')}
            >
                {success ? 'Copied' : 'Copy Text'}
            </StyledButton>
            <br />
            <StyledInput
                className="input"
                type="text"
                placeholder="Paste text here"
            />
        </StyledContainer>
    );
};

export default CopyToClipboardComponent;
