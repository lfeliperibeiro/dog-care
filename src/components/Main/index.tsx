import React from 'react';
import {Container, Wrapper, MainImage, Text} from './styles';
import Image from '../../assets/img/Blob 2.png';
import DogImage from '../../assets/img/Image.png';

const Main: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Text>
                <h1>Who we are</h1>
                <h2>Nemo enim ipsam voluptatem quia voluptas in proident</h2>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                    nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate 
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat 
                    quo voluptas nulla pariatur.</p>
                </Text>
                
                    <img src={Image} alt=""/>    
                            
            </Wrapper>
            <MainImage>
                <img src={DogImage} alt=""/>
            </MainImage>
        </Container>
    )
}

export default Main;