import React from 'react';

const Footer = () => {
  return (
    <div className="w-full min-h-24 flex items-center justify-center bg-black">
      <div className="flex w-full">
        <div className="md:px-8 w-full px-4 text-white flex flex-col">
          <div className="w-1/3 text-7xl font-bold">
            <h1 className="md:w-2/3 text-bold text-4xl pt-4">Say Hi</h1>
            <p className="w-full md:w-2/3 text-gray-400">something@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-12 flex-col text-right">
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                About
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Services
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Why us
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contact
              </a>
            </div>
            <hr className="border-white" />
            <p className="w-full text-right mt-4 mb-8 tracking-widest font-thin text-white">
              Copyright © 2023 Mikke Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
