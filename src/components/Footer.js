import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="container mx-auto text-white">
      <div className="py-[60px] px-4">
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-[150px] gap-y-[60px]'>
          <div className='flex flex-col gap-10 items-start'>
            <Link to="/">
              <img src="/logo.svg" alt="IQONO" />
            </Link>
            <p className='text-[rgba(255,255,255,0.6)] text-lg leading-[1.1]'>
              Protect every transaction with advanced risk controls and 24/7 monitoring.
            </p>
            <Button variant='primary'>Get Started</Button>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='uppercase text-white text-base leading-[1.1]'>Products</p>
            <Link to="/products/card-acquiring" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Card acquiring & native currencies
            </Link>
            <Link to="/products/payouts" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Payouts solutions
            </Link>
            <Link to="/products/apms" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              APMs
            </Link>
            <Link to="/products/open-banking" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Open Banking
            </Link>
            <Link to="/products/payment-gateway" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Payment Gateway
            </Link>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='uppercase text-white text-base leading-[1.1]'>Boosters</p>
            <Link to="/boosters/fraud-risk" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Fraud & Risk Managment
            </Link>
            <Link to="/boosters/chargeback" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Chargeback resolution
            </Link>
            <Link to="/boosters/smart-routing" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Smart Routing
            </Link>
            <Link to="/boosters/global-expansion" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Global Expansion
            </Link>
            <Link to="/boosters/analytics" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              Real-Time Analytics
            </Link>
            <Link to="/boosters/support" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
              24/7 Support
            </Link>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
              <p className='uppercase text-white text-base leading-[1.1]'>Company</p>
              <Link to="/company/about" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
                About us
              </Link>
              <Link to="/company/blog" className='flex flex-col text-[rgba(255,255,255,0.8)] text-sm leading-[1.1]'>
                Blog
              </Link>
            </div>
            <div className='flex gap-5 mt-[60px]'>
              {/* <a href='#'>
                <div className='w-10 h-10 bg-[#423ADC1A] border border-[#423ADC0D] rounded-xl flex items-center justify-center'>
                  <img src='/github.png' className='w-5 h-5' />
                </div>
              </a>
              <a href='#'>
                <div className='w-10 h-10 bg-[#423ADC1A] border border-[#423ADC0D] rounded-xl flex items-center justify-center'>
                  <img src='/x.png' className='w-5 h-5' />
                </div>
              </a> */}
              <a href='https://www.linkedin.com/company/iqono'>
                <div className='w-10 h-10 bg-[#423ADC1A] border border-[#423ADC0D] rounded-xl flex items-center justify-center'>
                  <img src='/in.png' className='w-5 h-5' />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between" />
      </div>
    </footer>
  );
};

export default Footer;
