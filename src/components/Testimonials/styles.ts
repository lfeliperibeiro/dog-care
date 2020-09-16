import styled from 'styled-components';


export const Container = styled.div``

export const Box = styled.div`
    max-width: 1000px;
    height: 600px;
    margin: -50px auto;
    margin-bottom: 40px;  
    background: var(--secondary);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;     
`;

export const Text = styled.div`
    > h1 {
        color: #fff;
        font-size: 14px;
        text-align: center;
        padding: 20px;
    }
    > p {
        color: #fff;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        margin-top: 10px;
    }
`;

export const ImageContainer = styled.div`
       max-width: 800px;
       margin: -400px auto;
      

    > img {
        max-width: 800px;
        height: 500px; 
        border-radius: 16px;    
        margin: -50px auto;
        box-shadow: 1px 1px 1px 2px rgba(0,0,0,0.2);            

    }
`;


