import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa';
import anambraLogo from '../assets/anambra-map.png';
import facebook from '../assets/facebook.png';
import x from '../assets/x.png';
import instagram from '../assets/Instagram.png';
import linkedin from '../assets/Twitter.png';

export default function Footer() {
    return (
        <footer className="mt-16 bg-white px-4 md:px-16">
            {/* Newsletter Signup */}
            <div className="bg-[#F2F2F2] py-8 px-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Stay in the loop</h3>
                        <p className="text-gray-600">
                            Subscribe to receive the latest news and updates about TDA. <br /> We promise not to spam you!
                        </p>
                    </div>
                    <div className="mt-12 flex items-center w-[300px] md:w-[470px] relative">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="flex-1 px-3 md:px-6 py-4 text-[#333333] bg-white rounded-md focus:outline-none w-full"
                        />
                        <button className="bg-[#C08032] absolute right-3 md:right-6 text-white px-6 py-1.5 shadow-md rounded-md">
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-[#E5E5E5] py-8 px-4 md:px-16">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Logo */}
                    <div className="mb-4">
                        <img
                            src={anambraLogo}
                            alt="Anambra Security Summit 2025"
                            className="mx-auto h-18"
                        />
                    </div>
                    {/* Nav Links */}
                    <nav className="space-x-6 space-y-3 flex flex-wrap justify-center !items-center mb-6">
                        <a href="#home" className="text-gray-700 hover:text-gray-900 text-sm">
                            Home
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-gray-900 text-sm">
                            About
                        </a>
                        <a href="#sponsorship" className="text-gray-700 hover:text-gray-900 text-sm">
                            Sponsorship
                        </a>
                        <a href="#speaker" className="text-gray-700 hover:text-gray-900 text-sm">
                            Speaker
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-gray-900 text-sm m-0 p-0">
                            Contact Us
                        </a>
                    </nav>
                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="https://facebook.com" className="text-gray-700 hover:text-gray-900">
                            <img src={facebook} alt="Facebook" className='w-8' />
                        </a>
                        <a href="https://twitter.com" className="text-gray-700 hover:text-gray-900">
                            <img src={x} alt="Twitter" className='w-8' />
                        </a>
                        <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900">
                            <img src={linkedin} alt="LinkedIn" className='w-8' />
                        </a>
                        <a href="https://instagram.com" className="text-gray-700 hover:text-gray-900">
                            <img src={instagram} alt="Instagram" className='w-8' />
                        </a>
                    </div>
                    <hr className="border-t border-[#C08032] mb-4" />
                    {/* Copyright */}
                    <p className="text-xs text-gray-600">
                        &copy; Copyright Dico-Xshield, 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}
