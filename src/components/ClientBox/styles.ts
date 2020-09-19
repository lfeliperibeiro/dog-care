import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1080px;
    margin: 500px auto 0;
`;

export const Clients = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px;
`;

export const ClientText = styled.div`
    > h1 {
        color: var(--secondary);
        font-size: 12px;
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    > p {
        color: #111;
        font-size: 32px;
        font-weight: bold;
        max-width: 290px;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    padding: 36px 0;
    height: 300px;
    border-radius: 12px;
    > p {
        font-size: 16px;
        color: #444;
        max-width:230px;
        text-align: center;       
      
    }


`;

export const ClientProfile = styled.div`
    display: flex;
    align-items: center;
    margin-top: 28px;

    > img {
        margin-right: 18px;
    }

    > p{
        color: var(--button);
        font-weight: bold;
    }

`;