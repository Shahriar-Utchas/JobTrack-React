import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import Companies from '../../Components/Companies/Companies';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Hero></Hero>
            <Companies></Companies>
        </>
    );
};

export default Home;