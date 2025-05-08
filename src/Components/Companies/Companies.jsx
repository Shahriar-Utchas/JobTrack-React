import React from 'react';
import { useLoaderData } from 'react-router';
import Company from './Company';

const Companies = () => {
    const companies = useLoaderData();
    return (
        <div className="px-6 py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Top Companies Hiring Now</h2>
            <p className="text-center text-gray-600 mb-10">
                Discover career opportunities at leading organizations across industries
            </p>
            <div className="grid gap-15 md:grid-cols-2 max-w-5xl mx-auto">
                {
                    companies.map((company) => (
                        <Company key={company.id} company={company} />
                    ))
                }
            </div>
        </div>
    );
};

export default Companies;
