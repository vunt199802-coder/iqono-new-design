import React from 'react';
import Button from '../Button';
import PromoSection from '../PromoSection';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

function Analytics() {
  return (
    <>
      <div className='bg-[url(/public/product-bg.png)] bg-cover bg-no-repeat py-10'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col items-start gap-10'>
              <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>05</p>
              <p className='text-5xl leading-[1.1] text-white'>Real-Time Analytics</p>
              <p className='text-lg leading-[1.1] text-white opacity-80'>iQono is a next-generation payment platform built for high-risk payment</p>
              <div className="flex justify-center">
                <button
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
                </button>
              </div>
            </div>
            <div className='w-1/2'>
              <img src='/booster-bg5.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#F5F4F9]'>
        <div className='grid sm:grid-cols-2 items-center justify-between'>
          <div className='flex'>
            <img className='object-cover w-2/3' src="/booster5.png" />
          </div>
          <div className='w-full z-10 max-w-[320px] md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] pl-4'>
            <p className='text-[#111021] text-5xl leading-[1.1] mb-10'>
              Real-Time Analytics for Smarter Decisions
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
        <div className='flex flex-col gap-10 container mx-auto px-4 pb-20 mt-[-50px]'>
          <p className='text-5xl text-[#111021]'>FAQ</p>
          <div className='grid grid-cols-2 gap-5'>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>Who can join the referral programme?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>How is my commission calculated?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>How do I refer a business?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>Do I need to be a Finera client?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>What is the minimum payout amount?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>How do I refer a business?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>When do I get paid?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
            <div className='flex items-center justify-between gap-6 bg-[#FCFCFC] rounded-2xl px-5 py-3'>
              <p className='text-2xl text-[#111021]'>Can I refer multiple businesses?</p>
              <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
            </div>
          </div>
        </div>
      </div>
      <PromoSection />
    </>
  );
}

export default Analytics;
