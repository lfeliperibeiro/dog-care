import React from 'react';

import {Container, NavHeader, LogoHeader, Nav, BannerText, Button} from './styles';


const Banner: React.FC = () => { 
    return (
        <Container>
            
            <NavHeader>
                <LogoHeader />
                <Nav>
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                    <a href="/">Serviços</a>
                    <a href="/">Shop</a>
                    
                </Nav>
            </NavHeader>
            <BannerText>
                <h1>Premium dog spa</h1>    
            </BannerText> 
            <Button>
                <p>Marque um horário</p>    
            </Button>      

        </Container>
    )
}

export default Banner;