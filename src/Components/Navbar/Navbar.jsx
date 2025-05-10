import { Link, NavLink } from 'react-router';
import { MdOutlineWork } from "react-icons/md";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {
    const { user, handleGoogleSignout } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeDropdown = () => setDropdownOpen(false);
    const getLinkClass = ({ isActive }) =>
        isActive ? 'text-primary font-semibold underline underline-offset-8' : 'text-gray-600';

    return (
        <nav className="bg-base-100 sticky top-0 z-50 shadow-sm">
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* START: Left side (Menu button + Logo) */}
                <div className="flex items-center gap-x-2 lg:w-auto">
                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <button onClick={() => { window.scrollToCompanies?.(); closeDropdown(); }} className="text-left w-full">
                                    Companies
                                </button>
                            </li>
                            <li><Link to="/jobs">All Jobs</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="btn btn-ghost text-xl gap-1 p-0">
                        <MdOutlineWork className="text-2xl" />
                        <span className="font-bold">
                            <span className="text-blue-700">Job</span>
                            <span className="text-orange-500">Track</span>
                        </span>
                    </Link>
                </div>

                {/* CENTER: Desktop Menu */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">

                    <ul className="menu menu-horizontal px-1 text-base font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={getLinkClass}
                                onClick={(e) => {
                                    if (window.location.pathname === '/') {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/companies"
                                className={getLinkClass}
                                onClick={(e) => {
                                    if (window.location.pathname === '/') {
                                        e.preventDefault();
                                        window.scrollToCompanies?.();
                                    }
                                }}
                            >
                                Companies
                            </NavLink>
                        </li>
                        <li><NavLink to="/jobs" className={getLinkClass}>Jobs</NavLink></li>
                        <li><NavLink to="/about" className={getLinkClass}>About Us</NavLink></li>
                    </ul>
                </div>

                {/* END: Right Side (Auth Buttons or Profile) */}
                <div className="flex flex-1 justify-end items-center space-x-4">
                    {
                        user ? (
                            <>
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
                                    <ul tabIndex={0}
                                        className="dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-xl w-44 space-y-1 border border-gray-200">
                                        <li>
                                            <Link
                                                to="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li><hr className="border-t border-gray-200 my-1" /></li>
                                        <li>
                                            <button
                                                onClick={handleGoogleSignout}
                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-md transition-colors duration-200"
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="btn btn-outline btn-sm lg:btn-md md:h-9 transition-transform duration-300 hover:scale-105 hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="btn btn-primary btn-sm lg:btn-md md:h-9 transition-transform duration-300 hover:scale-105 hover:shadow-md"
                                >
                                    Register
                                </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
