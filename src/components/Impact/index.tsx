import React from 'react';
import {Container, Title, Text, Visits, Content, TextContent, Appointment} from './styles';
import DogImage from '../../assets/img/dogImage.png';
import Duck from '../../assets/img/Group.png';
import House from '../../assets/img/dog_house.png';
import Trained from '../../assets/img/clean.png';
import DogFood from '../../assets/img/dog_food.png';

const Impact: React.FC = () => {
    return (
        <Container>
            <Title>
                <Text>
                    <h1>Our Impact</h1>
                    <p>Nemo enim ipsam voluptatem quia voluptas</p>
                </Text>
                <img src={DogImage} alt=""/>
            </Title>
            <Visits>
                <Content>
                    <img src={Duck} alt=""/>
                    <TextContent>
                        <h1>3,700</h1>
                        <p>puppy baths</p>
                    </TextContent>
                </Content>
                <Content>
                    <img src={House} alt=""/>
                    <TextContent>
                        <h1>4,500</h1>
                        <p>dogs boarded</p>
                    </TextContent>
                </Content>
                <Content>
                    <img src={Trained} alt=""/>
                    <TextContent>
                        <h1>2,900</h1>
                        <p>pups trained</p>
                    </TextContent>
                </Content>
                <Content>
                    <img src={DogFood} alt=""/>
                    <TextContent>
                        <h1>12k+</h1>
                        <p>meals served</p>
                    </TextContent>
                </Content>
            </Visits>
            <Appointment>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <a href="/">Make an Appointment</a>
            </Appointment>
        </Container>
    )
}

export default Impact;