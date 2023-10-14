import styled from "styled-components";

export const StyledProfileSection = styled.div`
    display: flex;
    margin-bottom: 2rem;
    align-items: center;
`

export const StyledProfilePicture = styled.img`
    height: 2.5rem;
    margin-right: 0.5rem;
    border-radius: 2rem;
`

export const StyledProfileTextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledProfileDisplayName = styled.span`
    word-wrap: break-word;
    font-size: 1.2rem;
`

export const StyledProfileLogOut = styled.span`
    word-wrap: break-word;
    cursor: pointer;
    color: ${({theme}) => theme.colors.blue};
`