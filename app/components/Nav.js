'use client';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericLine = `h-0.5 w-9 my-1 bg-black transition ease transform duration-300`;
  return (
    <nav className="flex-center h-full w-full mb-16 pt-3 bg-slate-300">
      <div className="mx-auto md:items-center md:flex">
        {/* LOGO */}
        <Link href="/">
          <h2 className="w-1/5 px-10">MIKKE</h2>
        </Link>
        {/* MOBILE NAVIGATION*/}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* lines */}

          <div
            className={`${genericLine} ${
              isOpen ? 'rotate-45 translate-y-5  ' : ' rotate-0 '
            }`}
          />
          <div
            className={`${genericLine} ${
              isOpen ? 'opacity-0' : 'opacity-100 '
            }`}
          />
          <div
            className={`${genericLine} ${
              isOpen ? '-rotate-45' : 'opacity-100 '
            }`}
          />
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            isOpen ? 'p-12 md:p-0 block' : 'hidden'
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex">
            <li className="pb-6 text-sm text-black py-2 md:px-6 text-center">
              <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                Home
              </Link>
            </li>
            <li className="pb-6 text-sm text-black py-2 md:px-6 text-center">
              <Link href="/item-page" onClick={() => setIsOpen(!isOpen)}>
                Shirts
              </Link>
            </li>
            <li className="pb-6 text-sm text-black py-2 md:px-6 text-center">
              <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
