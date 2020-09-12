import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1080px;
    margin: 50px auto;
   
`;

export const CardTitle = styled.div`
    > h1{
        color: var(--secondary);
        font-size: 16px;
        margin-bottom: 20px;
    }

    > h2 {
        color: #111;
        font-size: 32px;
        font-weight: bold;
    }
`;

export const CardsContent = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

`;

export const CardContent = styled.div`
    background-color: #FFF;
    padding: 42px 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;    
    transition: 200ms;

    &:hover{
        box-shadow: 2px 1px 2px 1px rgba(0,0,0,0.3);
    }

    > h1 {
        color: var(--button);
        font-size: 16px;
        margin: 30px;
    }

    > p {
        font-size: 14px;
        color: #777;
        max-width: 220px;
        margin-top: 20px;
    }

`;

export const Button = styled.div`
    max-width: 1080px;
    margin: 50px auto;
    text-align: center;
 > a {        
        background-color: var(--button);
        padding: 10px 18px;  
        border-radius: 4px;
        text-decoration: none;
        color: #FFF;
        font-size: 16px;      
    }

`
