import React from 'react';
import {Container, DogImage, BallImage, CallText} from './styles';
import Dog from '../../assets/img/pup.png';
import Ball from '../../assets/img/tennis ball.png';

const CalltoAction: React.FC = () => {
    return (
        <Container>
            <DogImage>
                <img src={Dog} alt=""/>
            </DogImage>
            <CallText>
                <p>Nemo enim ipsam voluptatem quia voluptas in proident</p>
                <a href="/">Make an Appointment</a>
            </CallText>
            <BallImage>
                <img src={Ball} alt=""/>
            </BallImage>
        </Container>
    )
}


export default CalltoAction;