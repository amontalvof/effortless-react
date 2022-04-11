import { useTranslation } from '../../hooks';
import * as translations from './translations';
import { StyledContainer, StyledButton } from '../../styles/index';

const TranslationComponent = () => {
    const { language, setLanguage, setFallbackLanguage, t } =
        useTranslation(translations);

    return (
        <StyledContainer>
            <p>language: {language}</p>
            <p>{t('hi')}</p>
            <p>{t('bye')}</p>
            <p>{t('nested.value')}</p>
            <StyledButton className="btn" onClick={() => setLanguage('es')}>
                Change To Spanish
            </StyledButton>
            <StyledButton className="btn" onClick={() => setLanguage('en')}>
                Change To English
            </StyledButton>
            <StyledButton
                className="btn"
                onClick={() => setFallbackLanguage('es')}
            >
                Change FB Lang
            </StyledButton>
        </StyledContainer>
    );
};

export default TranslationComponent;
