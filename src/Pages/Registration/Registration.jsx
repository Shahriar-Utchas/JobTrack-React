import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmFocused, setConfirmFocused] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Registering:', formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register for JobTrack</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder='Enter your full name'
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder='Enter your email address'
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                                required
                                placeholder='Enter your password'
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {passwordFocused && (
                                <div
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <FaEyeSlash className="text-gray-500" />
                                    ) : (
                                        <FaEye className="text-gray-500" />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onFocus={() => setConfirmFocused(true)}
                                onBlur={() => setConfirmFocused(false)}
                                required
                                placeholder='Re-enter your password'
                                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {confirmFocused && (
                                <div
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash className="text-gray-500" />
                                    ) : (
                                        <FaEye className="text-gray-500" />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-200 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Registration;
