import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50 px-4 md:px-16">
      <div className="w-full mx-auto flex items-center justify-between px-0 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          {/* <img src="https://random.imagecdn.app/60/60" alt="Logo" className="h-10 w-10 object-cover rounded-full" /> */}
          <span className="font-bold text-lg text-[#C08032]">Dicon Anambra</span>
        </NavLink>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-[#C08032] shadow-2xl font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>About Us</NavLink>
          <NavLink to="/sponsorship" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Sponsorship</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Speakers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Contact Us</NavLink>
        </nav>
        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2">
          <button className="px-4 py-2 bg-[#C08032] text-white rounded hover:bg-[#A65E2E] transition">Register</button>
          <button className="px-4 py-2 border border-[#C08032] text-[#C08032] rounded hover:bg-[#C08032]/10 transition">Sign In</button>
        </div>
        {/* Hamburger Icon */}
        <button className="md:hidden text-2xl text-[#C08032] focus:outline-none" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[rgb(0,0,0,0.9)] bg-opacity-40 z-50 transition-opacity duration-300 ${open ? 'block' : 'hidden'}`} onClick={() => setOpen(false)}></div>
        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="font-bold text-lg text-[#C08032]">Dicon Anambra</span>
            <button className="text-2xl text-[#C08032]" onClick={() => setOpen(false)}><FaTimes /></button>
          </div>
          <nav className="flex flex-col gap-6 px-6 py-8">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"} onClick={() => setOpen(false)}>About Us</NavLink>
            <NavLink to="/sponsorship" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"} onClick={() => setOpen(false)}>Sponsorship</NavLink>
            <NavLink to="/speakers" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"} onClick={() => setOpen(false)}>Speakers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"} onClick={() => setOpen(false)}>Contact Us</NavLink>
            <button className="mt-8 px-4 py-2 bg-[#C08032] text-white rounded hover:bg-[#A65E2E] transition">Register</button>
            <button className="mt-2 px-4 py-2 border border-[#C08032] text-[#C08032] rounded hover:bg-[#C08032]/10 transition">Sign In</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
