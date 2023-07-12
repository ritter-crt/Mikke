'use client';
import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const genericLine = `h-0.5 w-8 my-1 bg-gray-700 transition ease transform duration-500`;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full  fixed top-0 left-0 right-0 z-10 bg-slate-300">
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
              className="flex flex-col h-12 w-12  justify-center items-center group"
              onClick={toggleMenu}
            >
              <div
                className={`${genericLine} ${
                  isOpen ? 'rotate-45 translate-y-2.5 ' : 'rotate-0'
                }`}
              />
              <div
                className={`${genericLine} ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div
                className={`${genericLine} ${
                  isOpen ? '-rotate-45 -translate-y-2.5 ' : 'opacity-100'
                }`}
              />
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? 'p-12 md:p-0 block' : 'hidden'
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="text-sm text-black  md:px-6 text-center">
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="text-sm text-black  md:px-6 text-center">
                <Link href="/item-page" onClick={toggleMenu}>
                  Items
                </Link>
              </li>
              <li className="text-sm text-black  md:px-6 text-center">
                <Link href="/" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
