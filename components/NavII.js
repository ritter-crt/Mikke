'use client';
import { navLinks } from '@/constants';
import { mikkeLogo } from '@/public/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const genericLine = `h-0.2 w-6 my-[0.18rem] rounded-full bg-black transition ease transform duration-300`;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full fixed z-10">
      <div className="flex flex-row justify-between bg-red md:px-6 py-2 bg-white/90 md:bg-transparent">
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

        <div
          className={`flex-1 flex-row  md:block md:py-0 md:mt-0 ${
            isOpen ? 'md:p-0 block' : 'hidden'
          }`}
        >
          <div className="flex justify-between">
            {/* First 3 links on the left */}
            <div className="flex flex-row">
              {navLinks.slice(0, 3).map((link) => (
                <div
                  key={link.label}
                  className="text-2xs font-montserrat font-thin text-black tracking-widest md:px-3 py-3 text-center list-none"
                >
                  <Link href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <div className="w-12 md:w-16 lg:w-20">
                <Link href="/">
                  <Image src={mikkeLogo} alt="Logo" objectFit="contain" />
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              {/* Last 3 links on the right */}
              <div className="flex flex-row">
                {navLinks.slice(3, 6).map((link) => (
                  <div
                    key={link.label}
                    className="text-2xs font-montserrat font-thin text-black tracking-widest md:px-3 py-3 text-center list-none"
                  >
                    <Link href={link.href} onClick={toggleMenu}>
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MikkeLogo in the middle */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
