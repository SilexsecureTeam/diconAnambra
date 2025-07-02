import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50 px-16">
      <div className="w-full mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          {/* <img src="https://random.imagecdn.app/60/60" alt="Logo" className="h-10 w-10 object-cover rounded-full" /> */}
          <span className="font-bold text-lg text-[#C08032]">Dicon Anambra</span>
        </NavLink>
        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" end className={({ isActive }) => isActive ? "text-[#C08032] shadow-2xl font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>About Us</NavLink>
          <NavLink to="/sponsorship" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Sponsorship</NavLink>
          <NavLink to="/speakers" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Speakers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#C08032] font-semibold" : "text-gray-700 hover:text-[#C08032]"}>Contact Us</NavLink>
        </nav>
        {/* Buttons */}
        <div className="flex gap-2">
          <button className="hidden md:inline-block px-4 py-2 bg-[#C08032] text-white rounded hover:bg-[#A65E2E] transition">Register</button>
          <button className="hidden md:inline-block px-4 py-2 border border-[#C08032] text-[#C08032] rounded hover:bg-[#C08032]/10 transition">Sign In</button>
        </div>
        {/* Mobile menu button (optional) */}
        {/* You can add a mobile menu here if needed */}
      </div>
    </header>
  );
}
