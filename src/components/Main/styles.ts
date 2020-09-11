import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;

`;

export const Wrapper = styled.div`
   width: 1080px;
   height: 695px;
   margin: 10px auto;
   border-radius: 20px;
   background-color: var(--secondary);

   > img {
       
       margin-left: 50px;
   }
   
`;

export const Text = styled.div`
   display: flex;
   flex-direction: column;
   

   > h1 {
        color: #FFF;
        font-size: 16px;
        text-transform: uppercase;
        padding: 40px;
   }
   
   > h2 {
        max-width: 600px;
        color: #FFF;
        font-size: 32px;
        font-weight: 700;
        padding: 20px 40px;
   }

   > p {
       color: #FFF;
       font-size: 16px;
       line-height: 26px;
       padding: 40px;
   }

`



export const MainImage = styled.div`
    max-width: 900px;
    margin: -120px auto;

`;
