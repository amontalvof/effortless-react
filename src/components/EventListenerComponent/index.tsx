import { useState, KeyboardEvent } from 'react';
import { useEventListener } from '../../hooks';
import { StyledContainer } from '../../styles';

const EventListenerComponent = () => {
    const [key, setKey] = useState('');
    useEventListener('keydown', (e: KeyboardEvent) => {
        setKey(e.key);
    });

    return (
        <StyledContainer>
            <h3>Press a key</h3>
            <h1>Last Key: {key}</h1>
        </StyledContainer>
    );
};

export default EventListenerComponent;
