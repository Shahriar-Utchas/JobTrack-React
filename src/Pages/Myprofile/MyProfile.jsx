import React, { use, useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const MyProfile = () => {
    const { user } = use(AuthContext);

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="p-4 text-center">
                <h1 className="text-2xl font-semibold mb-4">My Profile</h1>

                <div className="mb-4">
                    <img
                        src={user?.photoURL || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="rounded-full w-32 h-32 mb-4 mx-auto transition duration-300 hover:scale-105 hover:ring-4 hover:ring-blue-300"
                    />
                    <p><strong>Name:</strong> {user?.displayName || 'No name available'}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                </div>

                <Link to="/update-profile">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300 hover:bg-blue-700 hover:scale-105 cursor-pointer">
                        Update Information
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;
