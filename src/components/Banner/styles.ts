import styled from 'styled-components';
import DogImage from '../../assets/img/duotone.png';





export const Container = styled.div`
    width: 100%;
    height: 800px;
    background-image: url(${DogImage});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column; 
    align-items: center;
    align-content:center;   
`;

export const NavHeader = styled.div``;

export const LogoHeader = styled.div``;

export const Nav = styled.div`
    max-width: 1020px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;
  > a {
    text-decoration: none;
    color: #111;
  }

     
`;

export const BannerText = styled.h1`
   color: #FFF;
    font-size: 42px;
    text-align: center;
    margin-top: 50px;
`;

export const Button = styled.a`
    background: var(--button);
    height: 48px;
    width: 210px;
    border-radius: 8px;
    outline: none;
    margin-top: 50px;
    box-shadow: 2px 2px 1px 1px rgba(0,0,0,0.2);
   

    > p {
        text-align: center;
        padding: 15px;
        color: #FFF;
        font-size: 12px;       
        text-transform: uppercase;
    }




`;
