import React, { use, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';


const Registration = () => {
    const { user, createUser, handleGoogleLogin } = use(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);
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
    const [passwordError, setPasswordError] = useState('');
    const [NameError, setNameError] = useState('');
    const [Error, setError] = useState('');

    const validatePassword = (password) => {
        let error = '';
        if (!/[A-Z]/.test(password)) {
            error = 'Password must include at least one uppercase letter.';
        } else if (!/[a-z]/.test(password)) {
            error = 'Password must include at least one lowercase letter.';
        } else if (password.length < 6) {
            error = 'Password must be at least 6 characters long.';
        }
        setPasswordError(error);
        return error === '';
    };
    const validateName = (name) => {
        let error = '';
        if (name.trim().length < 6) {
            error = 'Name must be at least 6 characters long.';
        }
        setNameError(error);
        return error === '';
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'password') {
            validatePassword(value);
        }
        if (name === 'name') {
            validateName(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isPasswordValid = validatePassword(formData.password);
        const isNameValid = validateName(formData.name);
        if (!isNameValid || !isPasswordValid) return;
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }
        createUser(formData.email, formData.password, formData.name)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'Welcome to our platform!',
                    timer: 1000,
                    showConfirmButton: false,
                }).then(() => {
                    navigate('/');
                });
            })
            .catch((error) => {
                setError(error.code);
            });
    };
    const handleGoogleLoginClick = () => {
        handleGoogleLogin()
            .then((result) => {
                SetUser(result.user);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-5">
            <Helmet>
                <title>Registration</title>
            </Helmet>
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
                    {NameError && (
                        <p className="text-sm text-red-500 mt-1">{NameError}</p>
                    )}
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
                    {passwordError && (
                        <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                    )}
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
                    {Error && (
                        <p className="text-sm text-red-500 mt-1">{Error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
                </p>
                <div className="mt-6 space-y-3">
                    <button
                        className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-yellow-100 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
                        onClick={handleGoogleLoginClick}
                    >
                        <FcGoogle className="text-xl" />
                        <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                    </button>
                    <button
                        className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
                    >
                        <FaGithub className="text-xl text-black" />
                        <span className="text-sm font-medium text-gray-700">Continue with GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
