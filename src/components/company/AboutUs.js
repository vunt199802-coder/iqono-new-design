import React from 'react';
import Button from '../Button';

function AboutUs() {
  return (
    <>
      <div className="relative bg-[url(/public/iQono.png)] bg-contain bg-no-repeat bg-bottom">
        <div className='grid sm:grid-cols-2 items-center justify-between'>
          <div className='flex justify-end'>
            <div className='w-full z-10 max-w-[320px] md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] pl-4'>
              <p className='uppercase text-white text-[52px] xl:text-[64px] leading-[1.1] mb-10'>
                next-generation payment platform
              </p>
              <p className='text-white text-lg leading-[1.2] mb-[60px] opacity-80'>
                iQono is a global payment platform built for high-risk businesses. We combine smart infrastructure, security, and scale — to power seamless transactions across 200+ countries.
              </p>
            </div>
          </div>
          <div className='flex justify-end'>
            <img className='object-cover w-2/3' src="/Group1707480748.png" />
          </div>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 items-center justify-between mt-[calc(350px-40%)]'>
        <div className='flex'>
          <img className='object-cover w-2/3' src="/Group1707480746.png" />
        </div>
        <div className='w-full z-10 max-w-[320px] md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] pl-4'>
          <p className='text-white text-5xl leading-[1.1] mb-10'>
            Built for Scale. Designed for Control.
          </p>
          <p className='text-white text-lg leading-[1.2] mb-[60px] opacity-80'>
          From card acquiring and global payouts to APMs and Open Banking — iQono delivers a full-stack solution for high-performance payment infrastructure. With built-in boosters like fraud prevention, chargeback resolution, and real-time analytics, every transaction is optimized for speed, security, and reach.

          <br />
          <br />

          No matter your risk level or market — iQono gives you the tools 
          to grow, adapt, and lead.
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 mb-20 mt-[calc(350px-35%)]'>
        <p className='uppercase text-white text-5xl leading-[1.1] mb-10'>
          our values
        </p>
        <div className='flex gap-5 mt-10'>
          <div className='flex-1 flex flex-col bg-[#423ADC0D] border border-[#423ADC40] rounded-2xl p-8 gap-10 justify-between'>
            <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
              <p className='text-xl leading-[1.1] text-[#423ADC]'>01</p>
            </div>
            <div>
              <p className='text-xl text-white'>Enable High-Risk Payments</p>
              <p className='text-lg text-white opacity-60'>We make complex transactions simple, fast, and secure — even in high-risk environments.</p>
            </div>
          </div>
          <div className='flex-1 flex flex-col bg-[#423ADC0D] border border-[#423ADC40] rounded-2xl p-8 gap-10 justify-between'>
            <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
              <p className='text-xl leading-[1.1] text-[#423ADC]'>02</p>
            </div>
            <div>
              <p className='text-xl text-white'>Optimize Global Reach</p>
              <p className='text-lg text-white opacity-60'>Connect to over 200 countries with smart routing and local payment solutions.</p>
            </div>
          </div>
          <div className='flex-1 flex flex-col bg-[#423ADC0D] border border-[#423ADC40] rounded-2xl p-8 gap-10 justify-between'>
            <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
              <p className='text-xl leading-[1.1] text-[#423ADC]'>03</p>
            </div>
            <div>
              <p className='text-xl text-white'>Prevent Fraud Proactively</p>
              <p className='text-lg text-white opacity-60'>Protect every transaction with advanced risk controls and 24/7 monitoring.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/public/bg.png')] bg-cover bg-no-repeat px-4 py-20">
        <div className='container mx-auto px-4'>
          <div className='flex justify-between'>
            <div className='max-w-[870px] w-1/2'>
              <p className='text-5xl leading-[1.1] text-white'>
                How Get started?
              </p>
              <p className='text-base leading-[1.1] text-white mt-10 opacity-80'>
                From Sign-Up to Scaling — Seamlessly.
              </p>
              <img src='/get-started.png' className='w-[80%]' />
            </div>
            <div className='max-w-[705px] flex-1'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-white' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[30px]' src='/union1.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-white text-2xl leading-[1.1]'>
                        Begin Onboarding Process
                      </p>
                      <p className='text-white text-base leading-[1.1] opacity-60'>
                        KYB approval in 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-white' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[30px]' src='/union2.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-white text-2xl leading-[1.1]'>
                        API Integration
                      </p>
                      <p className='text-white text-base leading-[1.1] opacity-60'>
                        Go live in 48 hours (S2S, H2H, Cashier)
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-white' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[30px]' src='/union3.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-white text-2xl leading-[1.1]'>
                        Start Processing Payments Globally
                      </p>
                      <p className='text-white text-base leading-[1.1] opacity-60'>
                        Accept payments worldwide
                      </p>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] bg-white' />
              </div>
              <Button variant="primary" className='mt-[60px]'>Get Started</Button>
            </div>
          </div>
          <div className="bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex items-end justify-between mt-10 overflow-hidden">
            <div className='w-1/2 flex flex-col items-start gap-10 px-[30px] py-[50px]'>
              <p className='text-5xl leading-[1.1] text-white'>Start Processing
                <span className='text-[#423ADC]'> Payments Globally </span>with Speed, Precision, and Full Control
              </p>
              <p className='text-lg leading-[1.1] text-white opacity-60'>Integrate quickly and scale across markets — no friction, just flow.</p>
              <Button variant="primary">get started</Button>
            </div>
            <div className='w-1/2'>
              <img src='/Photoroom5.png' className='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
