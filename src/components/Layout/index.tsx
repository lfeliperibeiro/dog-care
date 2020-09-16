import React from 'react';

import Banner from '../Banner';
import Main from '../Main';
import CalltoAction from '../CalltoAction';
import Card from '../Card';
import Form from '../Form';
import Testimonials from '../Testimonials';


const Layout:React.FC = () => {
    return (
        <>
        <Banner />
        <Main />
        <CalltoAction />
        <Card />
        <Form />
        <Testimonials />
        </>
    )
}

export default Layout;