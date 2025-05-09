import React, { useEffect, useRef } from 'react';
import Hero from '../../Components/Hero/Hero';
import Companies from '../../Components/Companies/Companies';

const Home = () => {
    const companiesRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollToCompanies = () => {
            if (companiesRef.current) {
                const offset = 100; // adjust this based on your navbar height
                const topPos = companiesRef.current.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: topPos, behavior: 'smooth' });
            }
        };
    }, []);

    return (
        <>
            <Hero />
            <div ref={companiesRef}>
                <Companies />
            </div>
        </>
    );
};

export default Home;
