import React from 'react';


import {Container, FormContent, FormInput, FormButton, Text} from './styles';


const Form: React.FC = () => {
    return (
        <Container>
            <FormContent>
                <h1>Make an appointment</h1>
                <FormInput>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Phone"/>
                <input type="text" placeholder="Service"/>
                </FormInput> 
                <FormButton>
                <textarea name="about" placeholder="Tell us about your puppers include his/her name"></textarea>
                <a href="/">Make an Appointment</a>                    
                </FormButton>               
            </FormContent>
            <Text>
                <h1>Maxime placeat facere possimus omnis </h1>
                <h2>5,700+</h2>
                <p>customers served</p>                
            </Text>
        </Container>
    )
}

export default Form;