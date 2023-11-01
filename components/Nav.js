'use client';
import { navLinks } from '@/constants';
import { mikkeLogo } from '@/public/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericLine = `h-0.2 w-6 my-[0.18rem] rounded-full bg-black transition ease transform duration-300`;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full fixed z-10">
      <div className="justify-between px-2 py-2 mx-auto lg:max-w-10xl md:items-center md:flex md:px-6 md:py-0 bg-white">
        <div className="flex items-center justify-between md:py-5 md:block">
          {/* LOGO */}
          <div className="w-12 md:w-16 lg:w-20">
            <Link href="/">
              <Image src={mikkeLogo} alt="Logo" objectFit="contain" />
            </Link>
          </div>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden" onClick={toggleMenu}>
            {/* lines */}
            <button
              className="flex flex-col h-10 w-5  justify-center items-center group"
              onClick={toggleMenu}
            >
              <div
                className={`${genericLine} ${
                  isOpen ? 'rotate-45 translate-y-[0.44rem] ' : 'rotate-0'
                }`}
              />
              <div
                className={`${genericLine} ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div
                className={`${genericLine} ${
                  isOpen ? '-rotate-45 -translate-y-[0.44rem] ' : 'opacity-100'
                }`}
              />
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:py-0 md:mt-0 ${
              isOpen ? 'md:p-0 block' : 'hidden'
            }`}
          >
            {/* NAV LINKS */}
            <ul className="relative h-screen md:h-auto items-center content-center md:flex ">
              {navLinks.slice(0, 3).map((link) => (
                <li
                  key={link.label}
                  className="text-2xs font-montserrat font-thin text-black tracking-widest md:pl-8 py-3 text-center"
                >
                  <Link href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {navLinks.slice(3, 6).map((link) => (
                <li
                  key={link.label}
                  className="text-2xs font-montserrat font-thin text-black tracking-widest md:pl-8 py-3 text-center"
                >
                  <Link href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
