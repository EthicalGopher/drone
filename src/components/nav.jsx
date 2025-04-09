import React, { useState } from 'react';
import "../assets/styles/nav.scss"
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="isolate-full  fixed w-full z-50 top-0">
    
      <div className="  flex  justify-between items-center md:items-start">
        {/* Logo/Brand */}
        
        <p className="px-12 py-5 text-black font-bold text-xl" id='header'>
          Jatayu
        </p>

        <div className=' px-4 md:p-4'>

      
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              {isOpen ? (
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 gap-5 ">
        <div className="nav">
  <div className="container">
    <div className="btn">Home</div>
    <div className="btn">Contact</div>
    <div className="btn">About</div>
    <div className="btn">FAQ</div>
    <svg
      className="outline"
      overflow="visible"
      width="400"
      height="60"
      viewBox="0 0 400 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        pathLength="100"
        x="0"
        y="0"
        width="400"
        height="60"
        fill="transparent"
        strokeWidth="5"
      ></rect>
    </svg>
  </div>
</div>
        </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 ${
            isOpen ? 'block' : 'hidden'
          }`}
          >
          <div className="flex flex-col p-4 space-y-2">
            <a href="#hero_section" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
