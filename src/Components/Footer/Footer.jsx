import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-12 px-4 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold">
                        Job<span className="text-orange-400">Track</span>
                    </h2>
                    <p className="mt-4 text-sm text-gray-300">
                        Find your dream job across multiple companies with our intuitive job tracking platform.
                    </p>
                    <div className="flex gap-4 mt-4 text-xl text-white">
                        <a href="https://www.facebook.com/shahriar.utchas" className="hover:text-orange-400 transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://github.com/Shahriar-Utchas" className="hover:text-orange-400 transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shahriar-utchas" className="hover:text-orange-400 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">Companies</a></li>
                        <li><a href="#" className="hover:text-white transition">All Jobs</a></li>
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-bold mb-4 text-lg">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="font-bold mb-4 text-lg">Stay Updated</h3>
                    <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for job updates</p>
                    <form className="flex flex-col sm:flex-row items-stretch">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-blue-900 border border-white text-white placeholder-gray-300 rounded-t sm:rounded-l sm:rounded-tr-none px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-b sm:rounded-r sm:rounded-bl-none mt-2 sm:mt-0"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 border-t border-blue-700 pt-4 text-center text-sm text-gray-300">
                © 2025 JobTrack.@Shahriar Utchas- All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
