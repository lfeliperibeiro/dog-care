import React from 'react';
import {Container, Wrapper, MainImage, Text, CardsTitle, CardTitle, CardText, Cards, Card} from './styles';
import Image from '../../assets/img/Blob 2.png';
import DogImage from '../../assets/img/Image.png';
import DogLove from '../../assets/img/dog_love_24x.png';
import DogVet from '../../assets/img/dog_vet_24x.png';
import DogCam from '../../assets/img/dog_stream_24x.png';

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

            <CardsTitle>
                 <h1>OUR PROMISE TO YOU</h1>
                <h2>Sed perspiciatis omnis iste natus</h2>
            </CardsTitle>
            <Cards>
                <Card>
                    <CardTitle>
                        <img src={DogLove} alt=""/>
                        <p>24/7 Love & Care</p>
                    </CardTitle>
                    <CardText>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                             corrupti quos dolores et quas.</p>
                    </CardText>
                </Card>
                <Card>
                    <CardTitle>
                        <img src={DogVet} alt=""/>
                        <p>On-site Veterinarian</p>
                    </CardTitle>
                    <CardText>
                        <p>ADolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                             tempora incidunt.</p>
                    </CardText>
                </Card>
                <Card>
                    <CardTitle>
                        <img src={DogCam} alt=""/>
                        <p>Live-stream Cameras</p>
                    </CardTitle>
                    <CardText>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae 
                            consequatur illum.</p>
                    </CardText>
                </Card>
            </Cards>
        </Container>
    )
}

export default Main;