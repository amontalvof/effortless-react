import { useState } from 'react';
import { useToggle, useDebugInformation } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const ChildComponent = (props: any) => {
    const info = useDebugInformation('ChildComponent', props);

    return (
        <>
            <h4>{props.boolean.toString()}</h4>
            <h4>{props.count}</h4>
            <pre>{JSON.stringify(info, null, 4)}</pre>
        </>
    );
};

const DebugInformationComponent = () => {
    const [boolean, toggle] = useToggle(false);
    const [count, setCount] = useState(0);

    return (
        <StyledContainer>
            <ChildComponent boolean={boolean} count={count} />
            <StyledButton className="btn" onClick={toggle}>
                Toggle
            </StyledButton>
            <StyledButton
                className="btn"
                onClick={() => setCount((prevCount) => prevCount + 1)}
            >
                Increment
            </StyledButton>
        </StyledContainer>
    );
};

export default DebugInformationComponent;
