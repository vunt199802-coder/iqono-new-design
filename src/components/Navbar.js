import React, { useState } from 'react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Producrs', href: '#' },
    { name: 'Boosters', href: '#boosters' },
    { name: 'Company', href: '#company' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <nav className="z-20">
      <div className="px-20 py-4 sm:px-5 lg:px-[60px]">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <a href="#">
              <img src="logo.svg" alt="IQONO" />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#423ADC] px-3 py-2 text-[20px] leading-[22px]"
              >
                {item.name}
              </a>
            ))}
            <Button variant="primary">Get Started</Button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#423ADC]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute bg-[#111021] lg:hidden w-full z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-center text-[20px] leading-[22px] text-white hover:text-[#423ADC] hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-center">
              <button
                className='w-full uppercase flex items-center justify-center gap-4 px-8 py-3 rounded-lg font-normal text-[20px] leading-[22px] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-[#423ADC] border border-[#423ADC] hover:bg-[#423ADC44]'
              >
                <div className='flex w-4 h-4'>
                  <div className='flex flex-col w-2'>
                    <div className='w-2 h-2 bg-white' />
                  </div>
                  <div className='flex flex-col justify-end w-2'>
                    <div className='w-2 h-2 bg-white' />
                  </div>
                </div>
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
