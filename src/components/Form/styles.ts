import styled from 'styled-components';

import BG from '../../assets/img/Bg.png';

export const Container = styled.div`
    width: 100%;
    height: 800px;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    display: flex;
    gap: 400px;    
    align-items: center;
    justify-items: center;
`;

export const FormContent = styled.div`
    background-color: var(--secondary);
    height: 500px;
    margin-left: 80px;
    border-radius: 20px;
    

    > h1 {
        color: #FFF;
        padding: 32px;
        text-align: center;
        font-size: 32px;
    }

    
    `;

export const FormInput = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding: 8px 20px;

    

    > input {
        background-color: var(--secondary);
        border: 1px solid #fff;
        height: 48px;
        border-radius: 8px;

        &::placeholder{
            color: #fff;
            opacity: 0.7;
            padding: 6px;
            font-size: 16px;
        }
    } 

`;

export const FormButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > textarea {
        background-color: var(--secondary);
        border: 1px solid #fff;
        height: 150px;
        width: 500px;
        border-radius: 8px;
        margin: 8px 20px;
        &::placeholder{
            color: #fff;
            opacity: 0.7;
            padding: 6px;
            font-size: 14px;
        }       
        
    }

    > a {
        width: 200px;
        background: var(--button);
        padding: 12px 16px ;
        text-decoration: none;
        color: #FFF;
        text-transform: uppercase;
        font-size: 14px;
        border-radius: 6px;  
        margin-top: 30px; 

    }
    
`

export const Text = styled.div`   
    > h1 {
        color: #FFF;
        font-size: 22px;
        font-weight: bold;
        max-width: 250px;
        text-align: center;
    }

    > h2{
        color: #FFF;
        text-align: center;
        font-size: 100px;
        margin-top: 10px;
    }
    > p {
        margin-top: 10px;
        text-align: center;
        color: #FFF;
        font-size: 16px;
        font-weight: bold;

    }
`;
