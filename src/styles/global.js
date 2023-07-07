import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-weight: 700;
    }
    
    body {
        background: #f5f5f5;
        font-size: 14px;
        color: #333;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
`