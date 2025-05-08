import React from 'react';
import { Link } from 'react-router';

const Company = ({ company }) => {
    return (
        <Link
            to={`/company/${company.id}`}
            className="block transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border border-blue-500 rounded-xl"


        >
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 mx-auto mb-4 rounded-md object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.industry}</p>
                <p className="text-sm text-gray-500">{company.location}</p>
                <span className="inline-block mt-4 px-4 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    {company.jobs.length} Job{company.jobs.length > 1 ? 's' : ''} Available
                </span>
            </div>
        </Link>
    );
};

export default Company;
