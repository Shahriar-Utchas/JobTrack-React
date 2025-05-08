import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <h1>nav</h1>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </>
    );
};

export default Root;