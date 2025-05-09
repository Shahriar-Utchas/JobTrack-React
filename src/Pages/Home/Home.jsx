import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../Components/Hero/Hero';
import Companies from '../../Components/Companies/Companies';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const companiesRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.scrollToCompanies = () => {
            if (companiesRef.current) {
                const offset = 100;
                const topPos = companiesRef.current.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: topPos, behavior: 'smooth' });
            }
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>JT | Home</title>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Hero />
                <div ref={companiesRef}>
                    <Companies />
                </div>
            </motion.div>
        </>
    );
};

export default Home;
