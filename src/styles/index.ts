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
    padding-bottom: 20px;
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