import React from 'react';
import '../../App.css'
import Home from '../Home'
import About from '../About';
import Cards from '../Cards';
import MobileApp from '../MobileApp';

function Main () {
    return (
        <>
            <Home />
            <About />
            <Cards />
            <MobileApp />
        </>
    )
}

export default Main;