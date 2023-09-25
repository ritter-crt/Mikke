import React from 'react';

const Footer = () => {
  return (
    <div class="w-full min-h-24 flex items-center justify-center bg-black">
      <div class="flex w-full">
        <div class="md:px-8 w-full px-4 text-white flex flex-col">
          <div class="w-1/3 text-7xl font-bold">
            <h1 class="md:w-2/3 text-bold text-4xl pt-4">Say Hi</h1>
            <p class="w-full md:w-2/3 text-gray-400">something@gmail.com</p>
          </div>
          <div class="flex flex-col">
            <div class="flex mb-12 flex-col text-right">
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                About
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Services
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Why us
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contact
              </a>
            </div>
            <hr class="border-white" />
            <p class="w-full text-right mt-4 mb-8 tracking-widest font-thin text-white">
              Copyright © 2023 Mikke Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
