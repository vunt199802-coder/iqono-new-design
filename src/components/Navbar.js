import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      timeoutRef.current = null;
    }, 100);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      name: 'Products',
      dropdownItems: [
        { name: 'Payouts solutions', href: '/products/payouts' },
        { name: 'Card acquiring', href: '/products/card-acquiring' },
        { name: 'APMs', href: '/products/apms' },
        { name: 'Open Banking', href: '/products/open-banking' },
        { name: 'Payment Gateway', href: '/products/payment-gateway' },
      ]
    },
    {
      name: 'Boosters',
      dropdownItems: [
        { name: 'Fraud & Risk Management', href: '/boosters/fraud-risk' },
        { name: 'Chargeback resolution', href: '/boosters/chargeback' },
        { name: 'Smart Routing', href: '/boosters/smart-routing' },
        { name: 'Global Expansion', href: '/boosters/global-expansion' },
        { name: 'Real-Time Analytics', href: '/boosters/analytics' },
        { name: '24/7 Support', href: '/boosters/support' },
      ] 
    },
    {
      name: 'Company',
      dropdownItems: [
        { name: 'About us', href: '/company/about' },
        { name: 'Blog', href: '/company/blog' },
      ]
    },
    {
      name: 'Partners',
      dropdownItems: [
        { name: 'Referral Program', href: '/partners/referral' },
        { name: 'Partner With Us', href: '/partners/join' },
      ]
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#111021] z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/logo.svg" alt="IQONO" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="text-white hover:text-[#423ADC] px-3 py-2 text-sm leading-[1.1] cursor-pointer"
                >
                  {item.name}
                </div>
                {activeDropdown === index && (
                  <div
                    className="absolute left-0 w-60 rounded-2xl shadow-lg bg-[#111021] border border-[#999999] z-30"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#423ADC44] hover:text-[#423ADC]"
                          role="menuitem"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
                <svg className="block h-[26px] w-[26px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-[26px] w-[26px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-[72px] left-0 bg-[#111021] lg:hidden w-full z-40">
          <div className="container mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={item.name} className="block">
                <div
                  className="block px-3 py-2 rounded-md text-center text-sm leading-[22px] text-white hover:text-[#423ADC] cursor-pointer"
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                >
                  {item.name}
                </div>
                {activeDropdown === index && (
                  <div className="bg-[#1a192f] py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-6 py-2 text-[16px] text-white hover:text-[#423ADC]"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-center">
              <Link
                to="/get-started"
                className='w-full uppercase flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-normal text-sm leading-[1.1] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-[#423ADC] border border-[#423ADC] hover:bg-[#423ADC44]'
                onClick={() => setIsOpen(false)}
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
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
