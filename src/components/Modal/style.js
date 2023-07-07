import styled from "styled-components";

export const StyledModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.624); 
`

export const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    padding: 2rem;
    border-radius: 1rem;
    @media (max-width: 950px) {
        width: 75%;
    }
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