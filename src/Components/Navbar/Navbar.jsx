import { Link } from 'react-router';
import { MdOutlineWork } from "react-icons/md";
const Navbar = () => {
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
            <div className="navbar-end space-x-4 mx-10">
                <Link to="/login" className="btn btn-outline transition-transform duration-300 hover:scale-105 hover:bg-blue-200 hover:text-blue-800 hover:border-blue-800 ">Login</Link>
                <Link to="/register" className="btn btn-primary transition-transform duration-300 hover:scale-105 hover:shadow-md">Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;
