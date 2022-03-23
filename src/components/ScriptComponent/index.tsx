import { useScript } from '../../hooks';
import { StyledContainer } from '../../styles';

const ScreenWidth = ({ loading, error }: { loading: boolean; error: any }) => {
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;
    return <h1>{(window as any).$(window).width()} px</h1>;
};

const ScriptComponent = () => {
    const { loading, error } = useScript(
        'https://code.jquery.com/jquery-3.6.0.min.js'
    );
    return (
        <StyledContainer>
            <h3>Window Width</h3>
            <ScreenWidth loading={loading} error={error} />
        </StyledContainer>
    );
};

export default ScriptComponent;
