'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-10">
      {/* Gray Background */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-screen bg-gray-900 bg-opacity-50 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={toggleMenu}
      />

      {/* Navigation Bar */}
      <motion.div
        className="bg-gray-300 fixed top-0 right-0 z-30 transform translate-x-full md:translate-x-0"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="">MIKKE</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden" onClick={toggleMenu}>
              {/* lines */}
              <button
                className="flex flex-col h-12 w-12 justify-center items-center group"
                onClick={toggleMenu}
              >
                <div
                  className={`h-0.5 w-8 my-1 rounded-full bg-black transition-transform duration-300 transform ${
                    isOpen ? 'rotate-45 translate-y-2.5' : 'rotate-0'
                  }`}
                />
                <div
                  className={`h-0.5 w-8 my-1 rounded-full bg-black transition-opacity duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <div
                  className={`h-0.5 w-8 my-1 rounded-full bg-black transition-transform duration-300 transform ${
                    isOpen ? '-rotate-45 -translate-y-2.5' : 'rotate-0'
                  }`}
                />
              </button>
            </div>
          </div>
          <div
            className={`md:flex md:justify-end md:items-center md:w-auto ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            <ul className="md:flex">
              <li className="text-sm text-black md:px-6 text-center">
                <Link href="#about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="text-sm text-black md:px-6 text-center">
                <Link href="#blog" onClick={toggleMenu}>
                  Blogs
                </Link>
              </li>
              <li className="text-sm text-black md:px-6 text-center">
                <Link href="#contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default Nav;
