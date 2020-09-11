import React from 'react';

import {Container, LogoHeader, Nav, BannerText, Button} from './styles';
import Logo from '../../assets/img/logo.png';

const Banner: React.FC = () => { 
    return (
        <Container>
                <LogoHeader>
                    <img src={Logo} alt=""/>
                </LogoHeader>
                <Nav>
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                    <a href="/">Serviços</a>
                    <a href="/">Shop</a>
                    
                </Nav>
           
            <BannerText>
                <h1>Premium Dog SPA</h1>    
            </BannerText> 
            <Button>
                <p>Marque um horário</p>    
            </Button>      

        </Container>
    )
}

export default Banner;