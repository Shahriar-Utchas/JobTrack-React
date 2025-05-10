import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { FaTimes } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const AllJobs = () => {
    const companies = useLoaderData();
    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleViewDetails = (job, company) => {
        setSelectedJob(job);
        setSelectedCompany(company);
    };

    return (
        <div className="p-6 bg-[#f5f9fc] min-h-screen">
            <Helmet>
                <title>JobTrack | Jobs</title>
            </Helmet>
            <h2 className="text-3xl font-bold mb-6 text-center text-[#1e3358]">All Available Jobs</h2>

            {/* Job Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {companies.map((company) =>
                    company.jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between relative"
                        >
                            {/* Top Content */}
                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#1e3358]">{job.title}</h3>
                                        <p className="text-gray-600 mt-1">{company.name}</p>
                                    </div>
                                    <img
                                        src={job.bannerImage}
                                        alt={company.name}
                                        className="w-14 h-14 object-cover rounded-md"
                                    />
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <span className="px-4 py-1 text-sm font-medium text-blue-600 border border-blue-300 rounded-full">
                                        {job.jobType}
                                    </span>
                                    <span className="px-4 py-1 text-sm font-medium text-gray-800 border border-gray-300 rounded-full">
                                        {job.location}
                                    </span>
                                </div>

                                <p className="mt-4 text-lg font-semibold text-[#1e3358]">{job.salary}</p>
                            </div>

                            {/* View Details Button */}
                            <button
                                onClick={() => handleViewDetails(job, company)}
                                className="mt-5 w-full bg-[#3b99fc] hover:bg-[#2487e5] text-white font-semibold py-3 rounded-md transition-transform hover:scale-[1.01] active:scale-95 shadow cursor-pointer"
                            >
                                View Details
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                            onClick={() => {
                                setSelectedJob(null);
                                setSelectedCompany(null);
                            }}
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Job Details */}
                        <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
                        <div className="text-sm text-gray-600 mb-1">
                            {selectedJob.jobType} • {selectedJob.location}
                        </div>
                        <p className="text-gray-800 font-medium">{selectedJob.salary}</p>
                        <p className="mt-3 text-gray-700">{selectedJob.description}</p>

                        {/* Requirements */}
                        {selectedJob.requirements?.length > 0 && (
                            <>
                                <h4 className="mt-5 font-semibold">Requirements:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                                    {selectedJob.requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Apply Now */}
                        {selectedCompany?.website && (
                            <div className="mt-6 flex justify-end">
                                <a
                                    href={selectedCompany.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition-transform hover:scale-105 active:scale-95 shadow"
                                >
                                    Apply Now
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllJobs;
