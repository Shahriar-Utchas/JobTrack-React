import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(name, photoURL);
            setMessage('Profile updated successfully!');
            setTimeout(() => navigate('/profile'), 500);
        } catch (error) {
            setMessage('Failed to update profile.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form onSubmit={handleUpdate} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Photo URL</label>
                    <input
                        type="text"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="w-full px-4 py-2 border rounded outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm focus:shadow-md"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300 hover:bg-blue-700 hover:scale-105 cursor-pointer"
                >
                    Update Information
                </button>

                {message && (
                    <p className="text-center mt-4 text-green-600 font-medium">{message}</p>
                )}
            </form>
        </div>
    );
};

export default UpdateProfile;
