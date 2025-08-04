import React from 'react';
import Button from '../Button';

function AboutUs() {
  return (
    <>
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
