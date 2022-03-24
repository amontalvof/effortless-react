import { useEffect, useState, useRef } from 'react';
import { useDeepCompareEffect } from '../../hooks';
import { StyledButton, StyledContainer } from '../../styles';

const DeepCompareEffectComponent = () => {
    const [age, setAge] = useState(0);
    const [otherCount, setOtherCount] = useState(0);
    const useEffectCountRef = useRef() as any;
    const useDeepCompareEffectCountRef = useRef() as any;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const person = { age: age, name: 'Kyle' };

    useEffect(() => {
        useEffectCountRef.current.textContent =
            parseInt(useEffectCountRef.current.textContent) + 1;
    }, [person]);

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent =
            parseInt(useDeepCompareEffectCountRef.current.textContent) + 1;
    }, [person]);

    return (
        <StyledContainer>
            <h2>
                useEffect: <span ref={useEffectCountRef}>0</span>
            </h2>
            <h2>
                useDeepCompareEffect:{' '}
                <span ref={useDeepCompareEffectCountRef}>0</span>
            </h2>
            <h2>Other Count: {otherCount}</h2>
            <h2>{JSON.stringify(person)}</h2>
            <StyledButton
                className="btn"
                onClick={() => setAge((currentAge) => currentAge + 1)}
            >
                Increment Age
            </StyledButton>
            <StyledButton
                className="btn"
                onClick={() => setOtherCount((count) => count + 1)}
            >
                Increment Other Count
            </StyledButton>
        </StyledContainer>
    );
};

export default DeepCompareEffectComponent;
