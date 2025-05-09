import React from 'react';
import { Link } from 'react-router';

const Company = ({ company }) => {
    return (
        <Link
            to={`/companies/${company.id}`}
            className="block rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg border border-transparent hover:border-blue-500"
        >
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-blue-50 transition-colors duration-500 ease-in-out">
                <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 mx-auto mb-4 rounded-md object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.industry}</p>
                <p className="text-sm text-gray-500">{company.location}</p>
                <span className="inline-block mt-4 px-4 py-1 bg-blue-200 text-blue-600 text-md font-medium rounded-full">
                    {company.jobs.length} Job{company.jobs.length > 1 ? 's' : ''} Available
                </span>
            </div>
        </Link>
    );
};

export default Company;
