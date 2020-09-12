import React from 'react';

import Banner from '../Banner';
import Main from '../Main';
import CalltoAction from '../CalltoAction';
import Card from '../Card';
import Form from '../Form';

const Layout:React.FC = () => {
    return (
        <>
        <Banner />
        <Main />
        <CalltoAction />
        <Card />
        <Form />
        </>
    )
}

export default Layout;