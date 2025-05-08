import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section className="bg-blue-100 py-12 px-4 md:px-16">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left Side Text */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
                        Find Your Perfect <br /> Career Opportunity
                    </h1>
                    <p className="py-6 text-gray-600 text-lg">
                        Explore top jobs from leading companies all in one place. Track your applications
                        and take the next step in your career journey.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link
                            to="/jobs"
                            className="btn btn-primary transition-transform duration-300 hover:scale-105 hover:shadow-md"
                        >
                            Browse Jobs
                        </Link>
                        <Link
                            to="/companies"
                            className="btn btn-outline transition-transform duration-300 hover:scale-105 hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800"
                        >
                            Explore Companies
                        </Link>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="max-w-sm md:max-w-md lg:max-w-lg transition-transform duration-500 hover:scale-105">
                    <img
                        src="images/hero-image.svg"
                        alt="Job search illustration"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
