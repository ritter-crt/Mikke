'use client';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericLine = `h-0.5 w-9 my-1 bg-black transition ease transform duration-300`;
  return (
    <div>
      <nav className="w-full bg-gray-100 fixed top-0 left-0 right-0 z-10">
        <div className="flex-items-center justify-between py-3 md:py-5 md:block">
          {/* MOBILE NAVIGATION*/}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {/* lines */}
            <div justify-end left-10 py-6>
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
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? 'p-4 md:p-0 block' : 'hidden'
            }`}
          >
            <ul
              className="flex flex-col h-screen md:h-auto items-center md:flex"
              open={isOpen}
            >
              <Link
                href="/"
                onClick={() => setIsOpen(!isOpen)}
                className="text-black no-underline uppercase font-hairline p-2"
              >
                Home
              </Link>
              <Link
                href="/item-page"
                onClick={() => setIsOpen(!isOpen)}
                className="text-black no-underline uppercase font-hairline p-2"
              >
                Shirts
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className="text-black no-underline uppercase font-hairline p-2"
              >
                About
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
