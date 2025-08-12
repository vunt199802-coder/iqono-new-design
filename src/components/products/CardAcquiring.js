import React from 'react';
import Button from '../Button';
import PromoSection from '../PromoSection';
import FAQ from '../FAQ';
import { Link } from 'react-router-dom';

function CardAcquiring() {
  return (
    <>
      <div className='bg-[url(/public/product-bg.png)] bg-cover bg-no-repeat py-10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex flex-col items-start gap-10'>
              <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>02</p>
              <p className='text-5xl leading-[1.1] text-white'>Card acquiring</p>
              <p className='text-lg leading-[1.1] text-white opacity-80'>iQono is a next-generation payment platform built for high-risk payment</p>
              <div className="flex justify-center">
                <Link
                  to="/get-started"
                  className='w-full uppercase flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-normal text-sm leading-[1.1] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 border border-[#423ADC] hover:bg-[#423ADC44]'
                >
                  Get Started
                  <div className='flex w-4 h-4'>
                    <div className='flex flex-col w-2'>
                      <div className='w-2 h-2 bg-[#423ADC]' />
                    </div>
                    <div className='flex flex-col justify-end w-2'>
                      <div className='w-2 h-2 bg-[#423ADC]' />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='w-full md:w-1/2 mt-10 md:mt-0'>
              <img src='/product-bg2.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F5F4F9]'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex'>
            <img className='object-cover md:w-2/3' src="/product2.png" />
          </div>
          <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4'>
            <p className='text-[#111021] text-5xl leading-[1.1] mb-10'>
              Card Acquiring Built for High-Risk and High Volume
            </p>
            <p className='text-[#111021] text-lg leading-[1.2] mb-[60px] opacity-80'>
            iQono's Payouts Solutions let you send funds instantly across 200+ countries in local currencies — with full control and transparency.
Automate workflows, schedule recurring payments, and manage high volumes effortlessly through a single dashboard.
            
            <br />
            <br />

            Built-in compliance tools, real-time tracking, and intelligent routing ensure every payout is fast, secure, and frictionless.
Whether you're handling affiliate commissions, supplier settlements, or mass disbursements — iQono powers it all.
            </p>
          </div>
        </div>
        <div className='hidden md:block'>
          <FAQ pageType="product" />
        </div>
      </div>
      <PromoSection />
    </>
  );
}

export default CardAcquiring;