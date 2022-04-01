import { useRef, MutableRefObject } from 'react';
import { useSize } from '../../hooks';
import { StyledContainer, StyledTextArea } from '../../styles';

const SizeComponent = () => {
    const ref = useRef() as MutableRefObject<any>;
    const size = useSize(ref);

    return (
        <StyledContainer>
            <pre>{JSON.stringify(size, null, 4)}</pre>
            <StyledTextArea ref={ref}></StyledTextArea>
        </StyledContainer>
    );
};

export default SizeComponent;
