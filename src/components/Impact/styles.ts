import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 500px;
   background: var(--primary);
   margin-top: 200px;

`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;   

    > img {
        margin: -100px 30px 0 30px;
    }
`;

export const Text = styled.div`
    margin-right: 50px;
    > h1 {
        font-size: 16px;
        color: #FFF;
    }

    > p {
        font-size: 32px;
        font-weight: bold;
        color: white;
        max-width: 400px;
    }

`;

export const Visits = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 40px;
    align-items: center;
    justify-content: center; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 

    > img {
        margin-right: 8px;
    }
`;

export const TextContent = styled.div`
    > h1 {
        color: #FFF;
    }

    > p {
        color: var(--secondary);
    }

`;

export const Appointment = styled.div`
    max-width: 1080px;
    height: 150px;
    border-radius: 12px;
    margin: 90px auto;
    background: var(--secondary);
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center; 
    
    > p {
        font-size: 26px;
        font-weight: bold;
        color: #FFF;
        max-width: 600px;
    }

    > a {
       background: var(--button);
       padding: 12px 18px;
       border-radius: 4px;
       font-size: 12px;
       text-decoration: none;
       text-transform: uppercase;
       color: #FFF;


    }
    

`;