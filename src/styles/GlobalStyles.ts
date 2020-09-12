import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, #root{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
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
        --background: #F5F5F5;
    }

`;