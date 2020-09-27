import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 150px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  align-items: center;
  justify-items: center;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  > img {
    width: 80px;
    height: 80px;
  }

  > p {
    font-size: 16px;
    line-height: 26px;
    color: #4B4B4B;
    max-width: 260px;
  }
`;

export const Social = styled.div``;

export const Links = styled.div`
  margin-top: 20px;
  > a {
    text-decoration: none;
    color: #4B4B4B;
    font-weight: bold;
    font-size: 16px;    
  }

`;

export const LinkArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 10px;
  margin-top: 18px;

  > a {
    text-decoration: none;
    color: #4B4B4B;
    font-weight: bold;
    font-size: 16px; 
  }
`;

export const Contact = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > h1 {
    font-size: 16px;
    text-transform: uppercase;
    color: #4B4B4B;
  }
`;

export const ContactArea = styled.div`
  display: flex;

  > p {
    margin-left: 4px;
    color: #4B4B4B;
    font-size: 16px;
    max-width: 220px;
  }

  > img {
    width: 20px;
    height: 20px;
  }

`;
