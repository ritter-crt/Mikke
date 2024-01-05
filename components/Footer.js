import { footerLinks } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <hr className="border-gray-200 w-screen "></hr>

      <div className="flex px-4 md:px-8 font-montserrat text-xs md:text-2xs font-thin tracking-wide">
        <div className="flex flex-col md:w-1/3 w-3/4 border-r border-gray-200 mt-8 h-24">
          <p className="my-2">Have a question?</p>
          <p className="font-normal my-2">Contact us at some@gmail.com</p>
          <Link
            href={'https://www.instagram.com/mikkestudio/'}
            className="flex flex-row my-2"
          >
            Instagram
          </Link>
        </div>

        <div className="flex flex-col mt-8">
          {footerLinks.map((link) => (
            <div className="flex flex-row my-2 md:ml-16 ml-4">{link.label}</div>
          ))}
        </div>
      </div>

      <div className="text-xs font-montserrat font-thin w-full text-center mt-8 mb-4 text-black">
        Copyright © 2023 Mikke Studio
      </div>
    </>
  );
};

export default Footer;
