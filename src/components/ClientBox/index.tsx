import React from 'react';
import {Container, Clients, ClientText, Box, ClientProfile} from './styles';
import Client_1 from '../../assets/img/Ellipse2.png'; 
import Client_2 from '../../assets/img/Ellipse.png'; 


const ClientBox: React.FC = () => {
    return (
        <Container>
            <Clients>
                <ClientText>
                    <h1>Our CUSTOMERS</h1>
                    <p>Illum qui dolorem eum quo voluptas ut distinctio</p>
                </ClientText>
                <Box>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore ex magna aliqua. Ut enim 
                            illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”</p>
                        <ClientProfile>
                            <img src={Client_1} alt=""/>
                            <p>Cullen Bohannon</p>
                        </ClientProfile>
                </Box>
                <Box>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore ex magna aliqua. Ut enim 
                            illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”</p>
                        <ClientProfile>
                            <img src={Client_2} alt=""/>
                            <p>Jennifer Thomas</p>
                        </ClientProfile>
                </Box>

            </Clients>
        </Container>
    )
}

export default ClientBox;

