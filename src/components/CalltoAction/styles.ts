import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 500px;
    background-color: var(--primary);
    display: flex; 
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

`;

export const CallText = styled.div`
   
    > p {
        color: #fff;
        font-size: 36px;
        font-weight: bold;
        max-width: 500px;
        margin-bottom: 50px;
        
    }

    > a {
        background-color: var(--button);
        padding: 12px 16px;
        border-radius: 6px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
        color: #fff;
        text-align: center;
        

    }

`;

export const DogImage = styled.div`
    margin-top: 80px;
  
  > img {
      height: 390px;  
      margin-left: 30px;
  }
`;

export const BallImage = styled.div`
    margin-right: 30px;

    > img {
        width: 100px;
        height: 100px;
    }

`;
