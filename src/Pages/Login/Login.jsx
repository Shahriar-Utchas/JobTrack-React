import React, { use, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { handleGoogleLogin } = use(AuthContext);
    const { user, SetUser, loginWithEmail } = use(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {
        if (user) {
            navigate(location?.state || '/');
        }
    }, [user, navigate]);

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginWithEmail(formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                SetUser(user);
                navigate(location?.state || '/');
            })
            .catch((error) => {
                let errorMessage = 'Login failed.';
                // Handle different error codes and set appropriate error messages
                switch (error.code) {
                    case 'auth/invalid-credential':
                        errorMessage = 'Invalid Email/password. Please try again.';
                        break;
                    case 'auth/user-not-found':
                        errorMessage = 'No user found with this email.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email address.';
                        break;
                    default:
                        errorMessage = error.code;
                }

                setError(errorMessage);  // Set the error message to state
            });
    };
    const handleGoogleLoginClick = () => {
        handleGoogleLogin()
            .then((result) => {
                SetUser(result.user);
                navigate(location?.state || '/');
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to JobTrack</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
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
                                    onMouseDown={(e) => e.preventDefault()} // Prevent blur on click
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

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                    >
                        Login
                    </button>
                </form>
                {error && (
                    <p className="text-red-500 text-sm text-center mt-3">
                        {error}  {/* Display the error message below the form */}
                    </p>
                )}

                <p className="text-sm text-center text-gray-500 mt-4">
                    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register now</a>
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

export default Login;
