import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html, #root{
        font-family: 'Roboto', sans-serif;
        max-height: 100vh;
        max-width: 100vw;
        background-color: var(--background);
    }

    :root{
        --button: #F2726F;
        --gray: #4B4B4B;
        --primary: #25CEC9;
        --secondary: #484C9A;
        --background: #E5E5E5;
    }

`;