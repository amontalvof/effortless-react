import styled from 'styled-components';

export const StyledContainer = styled.div`
    font-family: 'Gill Sans', sans-serif;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: #ffffff;
    padding: 0 20px 40px;
`;

export const StyledButton = styled.button`
    font-family: 'Gill Sans', sans-serif;
    background-color: #ffffff;
    border: none;
    color: black;
    padding: 10px 20px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 4px;

    :hover {
        background-color: #61dafb;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledPre = styled.pre`
    font-size: 16px;
`;

export const StyledInput = styled.input<{ error?: boolean }>`
    padding: 10px;
    font-size: 20px;
    border-radius: 4px;
    outline: none;
    :focus {
        border: 3px solid ${(props) => (props.error ? '#dc143c' : '#61dafb')};
        outline: none;
    }
`;

export const StyledTextArea = styled.textarea<{ error?: boolean }>`
    padding: 10px;
    font-size: 20px;
    border-radius: 4px;
    outline: none;
    :focus {
        border: 3px solid ${(props) => (props.error ? '#dc143c' : '#61dafb')};
        outline: none;
    }
`;
