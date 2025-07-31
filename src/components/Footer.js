import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="py-[60px] px-20 sm:px-5 lg:px-[60px]">
        <div className='flex justify-between'>
          <div className='flex flex-col gap-10 items-start'>
            <a href='#'>
              <img src='logo.svg' />
            </a>
            <p className='text-[rgba(255,255,255,0.6)] text-[16px] leading-[1.1]'>
              Protect every transaction with advanced risk controls and 24/7 monitoring.
            </p>
            <Button variant='primary'>Get Started</Button>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='uppercase text-white text-2xl leading-[1.1]'>Products</p>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Card acquiring & native currencies
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Payouts solutions
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              APMs
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Open Banking
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Payment Gateway
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <p className='uppercase text-white text-2xl leading-[1.1]'>Boosters</p>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Fraud & Risk Managment
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Chargeback resolution
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Smart Routing
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Global Expansion
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              Real-Time Analytics
            </div>
            <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
              24/7 Support
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-5'>
              <p className='uppercase text-white text-2xl leading-[1.1]'>Company</p>
              <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
                About us
              </div>
              <div className='flex flex-col text-[rgba(255,255,255,0.8)] text-xl leading-[1.1]'>
                Blog
              </div>
            </div>
            <div className='flex gap-5'>
              <a href='#'>
                <div className='w-[60px] h-[60px] bg-[#423ADC1A] border border-[#423ADC0D] rounded-xl flex items-center justify-center'>
                  <img src='github.png' />
                </div>
              </a>
              <a href='#'>
                <div className='w-[60px] h-[60px] bg-[#423ADC1A] border border-[#423ADC0D] rounded-xl flex items-center justify-center'>
                  <img src='x.png' />
                </div>
              </a>
              <a href='#'>
                <div className='w-[60px] h-[60px] bg-[#423ADC1A] border border-[#423ADC0D] rounded-xl flex items-center justify-center'>
                  <img src='in.png' />
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
