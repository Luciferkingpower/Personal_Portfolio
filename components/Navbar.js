"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#0e111c] text-slate-300">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link href="/" className="text-3xl  font-rubik">CodewithLord</Link>

        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden  items-center justify-center font-prociono_regular md:flex">
          <div className=" items-center">
          <Link className="mr-5" href="/">Home</Link>
          <Link className="mr-5" href="#about">About</Link>
          <Link className="mr-5" href="#contact">Contact</Link>
          <Link className="mr-5" href="#project">Project</Link>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
                Sign IN
          </button>

          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`fixed inset-0 font-prociono_regular bg-neutral-900 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
          <div className="flex flex-col items-end p-5">
            <button onClick={closeMenu} className="text-white text-4xl mb-4">&times;</button>
            <Link className="my-4" href="/" onClick={closeMenu}>Home</Link>
            <Link className="my-4" href="#about" onClick={closeMenu}>About</Link>
            <Link className="my-4" href="#contact" onClick={closeMenu}>Contact</Link>
            <Link className="my-4" href="#project" onClick={closeMenu}>Project</Link>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4">
                Sign IN
              </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
