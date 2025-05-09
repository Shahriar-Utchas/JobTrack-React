import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const CompaniesDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const company = data.find((company) => company.id === id);
    const [selectedJob, setSelectedJob] = useState(null);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (

        <div className="max-w-6xl mx-auto px-4 py-8">
            <Helmet>
                <title>JT | Companies</title>
            </Helmet>
            {/* Company Card */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6 border">
                <img src={company.logo} alt={company.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{company.name}</h1>
                    <p className="text-gray-500 mt-1">{company.industry} • {company.location}</p>
                    <div className="flex gap-4 mt-3">
                        <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-medium hover:underline flex items-center gap-1 transition-transform hover:scale-105"
                        >
                            Company Website <FaExternalLinkAlt size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Available Jobs */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Available Jobs ({company.jobs.length})</h2>
                <div className="grid gap-6">
                    {company.jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-xl shadow border p-4 flex flex-col md:flex-row justify-between items-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-bold">{job.title}</h3>
                                <p className="text-gray-500">{job.jobType} • {job.location}</p>
                                <p className="text-gray-700 mt-1 font-medium">{job.salary}</p>
                            </div>
                            <button
                                className="mt-4 md:mt-0 bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95 shadow hover:shadow-md cursor-pointer"
                                onClick={() => setSelectedJob(job)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 border border-gray-200 scale-95 animate-fade-in">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                            onClick={() => setSelectedJob(null)}
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
                        <h4 className="mt-5 font-semibold">Requirements:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                            {selectedJob.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>

                        {/* Apply Now Button */}
                        <div className="mt-6 flex justify-end">
                            <a
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition-all hover:scale-105 active:scale-95 shadow"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompaniesDetails;
