import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </>
    );
};

export default Root;