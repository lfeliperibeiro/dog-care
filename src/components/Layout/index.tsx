import React from 'react';

import Banner from '../Banner';
import Main from '../Main';
import CalltoAction from '../CalltoAction';
import Card from '../Card';

const Layout:React.FC = () => {
    return (
        <>
        <Banner />
        <Main />
        <CalltoAction />
        <Card />
        </>
    )
}

export default Layout;