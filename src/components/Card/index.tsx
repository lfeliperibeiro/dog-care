import React from 'react';

import {Container, CardTitle, CardsContent, CardContent, Button} from './styles';
import Boardind from '../../assets/img/dog_boarding_24x.png';
import Daycare from '../../assets/img/dog_daycare_24x.png';
import PetDay from '../../assets/img/dog_grooming_24x.png';
import Food from '../../assets/img/dog_food_24x.png';
import Training from '../../assets/img/dog_training_24x.png';
import Shop from '../../assets/img/dog_collar_24x.png';

const Card: React.FC = () => {
    return (
        <Container>
            <CardTitle>
                <h1>Our Services</h1>
                <h2>Sed perspiciatis omnis iste natus</h2>
            </CardTitle>
            <CardsContent>
                <CardContent>
                    <img src={Boardind} alt=""/>
                    <h1>Pet Boarding (No Cages)</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti 
                        quos dolores et qua</p>
                </CardContent>
                <CardContent>
                    <img src={Daycare} alt=""/>
                    <h1>Pet Daycare</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti 
                        quos dolores et qua</p>
                </CardContent>
                <CardContent>
                    <img src={PetDay} alt=""/>
                    <h1>Pet Day Spa & Grooming</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti 
                        quos dolores et qua</p>
                </CardContent>
                <CardContent>
                    <img src={Food} alt=""/>
                    <h1>Custom Meal Plans</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti 
                        quos dolores et qua</p>
                </CardContent>
                <CardContent>
                    <img src={Training} alt=""/>
                    <h1>Pet Training</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti 
                        quos dolores et qua</p>
                </CardContent>
                <CardContent>
                    <img src={Shop} alt=""/>
                    <h1>Shop Our Store!</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti 
                        quos dolores et qua</p>
                </CardContent>
            </CardsContent>

            <Button>
                <a href="/">Learn More</a>
            </Button>


        </Container>
    )
}

export default Card;