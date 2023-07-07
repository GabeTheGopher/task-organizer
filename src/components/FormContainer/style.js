import styled from "styled-components";

export const StyledFormContainer = styled.div`
`

export const StyledFormTitleInput = styled.input`
    width: 100%;
    border-radius: 10px;
    padding: 0.7em;
    background-color: ${({ theme }) => theme.colors.whiteBg};
    color: #666666;
    border: 2px solid transparent;
    font-family: 'Montserrat', sans-serif;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`

export const StyledFormDescriptionInput = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    padding: 0.7em;
    background-color: ${({ theme }) => theme.colors.whiteBg};
    color: #666666;
    border: 2px solid transparent;
    font-family: 'Montserrat', sans-serif;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    resize: none;
`
export const StyledFormButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    color: #008000;
    background: #ccffcc;
    width: 100%;
    margin-top: 1rem;
    padding: 0.7em;
    border: 2px solid transparent;
    border-radius:10px;
    transition: ease 0.5s;
    &:hover{
        border: 2px solid #C6E6C3;
    }
`