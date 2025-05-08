import { Link } from 'react-router';
import { MdOutlineWork } from "react-icons/md";
import { use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
const Navbar = () => {
    const { user, handleGoogleSignout } = use(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const closeDropdown = () => setDropdownOpen(false);
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            {/* Navbar Start (Logo + Dropdown for mobile) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/companies">Companies</Link></li>
                        <li><Link to="/jobs">All Jobs</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="btn btn-ghost text-xl">
                    <MdOutlineWork />
                    <span className="font-bold">
                        <span className="text-blue-700">Job</span>
                        <span className="text-orange-500">Track</span>
                    </span>
                </Link>

            </div>

            {/* Navbar Center (Visible on large screens) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/companies">Companies</Link></li>
                    <li><Link to="/jobs">All Jobs</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>

            {/* Navbar End (Auth Buttons) */}
            {
                user ? (
                    <div className="navbar-end space-x-4 mx-10 flex items-center relative">
                        <p className="hidden sm:block text-sm font-medium text-gray-700">Welcome, {user.displayName}</p>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>
                                <img
                                    src={user.photoURL}
                                    alt="User Profile"
                                    className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-md cursor-pointer"
                                    title={user.displayName}
                                />
                            </label>
                            <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl w-44 space-y-1 border border-gray-200">
                                <li>
                                    <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <hr className="border-t border-gray-200 my-1" />
                                </li>
                                <li>
                                    <button
                                        onClick={handleGoogleSignout}  // Call the signout handler on click
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-md transition-colors duration-200 cursor-pointer"
                                    >
                                        Logout
                                    </button>

                                </li>
                            </ul>
                        </div>
                    </div>


                ) : (
                    <div className="navbar-end space-x-4 mx-10">
                        <Link
                            to="/login"
                            className="btn btn-outline transition-transform duration-300 hover:scale-105 hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="btn btn-primary transition-transform duration-300 hover:scale-105 hover:shadow-md"
                        >
                            Register
                        </Link>
                    </div>
                )
            }


        </nav>
    );
};

export default Navbar;
