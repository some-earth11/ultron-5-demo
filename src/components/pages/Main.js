import React from 'react';
import '../../App.css'
import Home from '../Home'
import About from '../About';
import Cards from '../Cards';
import MobileApp from '../MobileApp';


function Main () {
    return (
        <>
            {/* <Example /> */}
            <Home />
            <About />
            <Cards />
            <MobileApp />
        </>
    )
}

export default Main;