import React from 'react';
import { useNavigate } from 'react-router';
import { Ghost } from 'lucide-react';
import Navbar from '../../Components/Navbar/Navbar';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>JobTrack | 404</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
                <div className="w-full max-w-md sm:max-w-xl bg-base-200 bg-opacity-5 shadow-xl rounded-2xl p-6 sm:p-10 text-center border border-primary">
                    <div className="flex flex-col items-center mb-6">
                        <Ghost size={56} className="text-primary mb-4 sm:mb-6" />
                        <h1 className="text-4xl sm:text-5xl font-bold text-black">404</h1>
                        <p className="text-lg sm:text-xl text-black mt-2 font-semibold">
                            Oops! Page Not Found
                        </p>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base mb-6 leading-relaxed">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300 hover:bg-blue-700 hover:scale-105 cursor-pointer"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;