import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
      {/* <div className='bg-[#F6F6F6] mt-[-72px]'>
        <div className='container mx-auto px-4 py-[60px]'>
          <p className='uppercase text-5xl text-[#111021]'>blog</p>
          <p className='text-base text-[#111021] mt-5'>Insights, trends, and updates shaping the future of global payments.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10'>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog1.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog2.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>High-risk friendly. Global-ready. </p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog3.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog4.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog5.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog6.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog7.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog8.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
            <div className='border border-[#1110210D] rounded-2xl'>
              <img src='/blog9.png' />
              <div className='flex flex-col items-start gap-5 p-6'>
                <p className='text-2xl text-[#111021]'>Worldwide High-Risk Credit Card Processing</p>
                <p className='text-sm text-[#111021] opacity-80'>Fast, secure A2A payments through trusted open banking providers. through trusted open banking providers through trusted open banking providers.</p>
                <button className="uppercase flex items-center gap-2 text-[#423ADC]">
                  Lear more
                  <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='container mx-auto px-4'>
        <div className="bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex flex-col md:flex-row items-end mt-10" data-aos="fade-up" data-aos-delay="100">
          <div className='md:w-1/2 flex flex-col items-start gap-10 px-[30px] py-[50px]' data-aos="fade-right" data-aos-delay="200">
            <p className='text-5xl leading-[1.1] text-white'>Explore Insights - and
              <span className='text-[#C6DC3A]'> Power Your Growth </span>with the Full iQono Suite
            </p>
            <p className='text-lg leading-[1.1] text-white opacity-60'>From products to payouts, everything you need is one integration away.</p>
            <Button variant="primary">get started</Button>
          </div>
          <div className='w-full md:w-1/2' data-aos="fade-left" data-aos-delay="300">
            <img src='/Photoroom6.png' className='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
