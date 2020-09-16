import React from 'react';
import {Container, Box, Text, ImageContainer} from './styles';
import DogImage from '../../assets/img/Image1.png';



const Testimonials: React.FC = () => {
    return (
        <Container>
            <Box>
            <Text>
               <h1>Happy Clients</h1> 
               <p>Check out our hard workers</p>
            </Text>
            </Box>
            
            <ImageContainer>
                <img src={DogImage} alt=""/>
            </ImageContainer>

        </Container>
    )
}

export default Testimonials;