import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const queryEmail = searchParams.get('email');
        if (queryEmail) setEmail(queryEmail);
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            setSuccessMessage('Password reset link sent! Please check your inbox.');
            setError('');
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            setError('Failed to send reset email. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center text-gray-700 mx-auto">Reset Your Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95  transition cursor-pointer"
                    >
                        Reset Password
                    </button>
                    {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
                    {successMessage && <p className="text-green-500 text-sm text-center mt-2">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
