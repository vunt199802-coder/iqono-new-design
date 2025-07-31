import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="mt-[-40px]">
      <div className='relative flex flex-col items-center md:flex-row py-10 bg-[url("/public/iQono.png")] bg-contain bg-bottom bg-no-repeat px-20 sm:px-5 lg:px-[60px]'>
        <div className='absolute w-[45%] z-10 mb-[10%]'>
          <p className='uppercase text-white text-[48px] xl:text-[72px] leading-[1.1] mb-10'>
            Accelerate Payments. Maximize Acceptance. Go Global.
          </p>
          <p className='text-white text-xl md:text-2xl leading-[1.2] mb-[60px]'>
            High-risk friendly. Global-ready. Start processing in under 48 hours.
          </p>
          <div className='flex gap-[30px]'>
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">About us</Button>
          </div>
        </div>
        <div className='relative flex-1 flex justify-end'>
          <img src='photoroom.png' alt='photoroom' className='w-[75%] object-cover rotate-[354.53deg] mr-[-28%] transform scale-x-[-1]' />
          <img src='mobile.png' alt='mobile' className='absolute w-[37%] object-cover mt-[8%] mr-[3%]' />
          <img src='onboarding-process.png' alt='onboarding-process' className='absolute w-1/5 object-cover mt-[42.5%] mr-[2%] rotate-[8.63deg]' />
          <img src="visa.png" alt="visa" className='absolute w-[21.5%] object-cover mt-[25.7%] mr-[22.5%]' />
        </div>
      </div>
      <div className='bg-gradient-to-b from-[transparent] to-[#423ADC55] px-20 sm:px-5 lg:px-[60px]'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-5 w-[35%]'>
            <p className='uppercase text-white text-xl leading-[1.1]'>
              Products
            </p>
            <p className='uppercase text-white text-[48px] xl:text-[72px] leading-[1.1]'>
              All-In-One Payment Stack
            </p>
          </div>
          <div className='w-1/2 flex items-center'>
            <p className='w-[70%] text-white text-xl lg:text-2xl leading-[1.1]'>
              iQono delivers a full-stack payment suite — from card acquiring and payouts to APMs and Open Banking. Built for performance, scalability, and global reach.
            </p>
          </div>
        </div>
        <div className='mt-20 flex flex-col gap-10'>
          <div className="h-[560px] bg-[url('/public/bg-1.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
            <img src='payment1.png' />
            <div className='flex flex-col items-start gap-10 w-5/6'>
              <p className='uppercase text-[32px] leading-[1.1] text-[#423ADC]'>01</p>
              <p className='text-[64px] leading-[1.1] text-white'>Payouts solutions</p>
              <p className='text-2xl leading-[1.1] text-white'>Global payouts in local currencies — fast, automated, and compliant.</p>
              <Button variant="outline">learn more</Button>
            </div>
          </div>
          <div className="h-[560px] bg-[url('/public/bg-2.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
            <img src='payment2.png' />
            <div className='flex flex-col items-start gap-10 w-5/6'>
              <p className='uppercase text-[32px] leading-[1.1] text-[#423ADC]'>02</p>
              <p className='text-[64px] leading-[1.1] text-white'>Card acquiring</p>
              <p className='text-2xl leading-[1.1] text-white'>Accept high-risk cards with smart routing and high approval rates.</p>
              <Button variant="outline">learn more</Button>
            </div>
          </div>
          <div className="h-[560px] bg-[url('/public/bg-3.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
            <div className='relative'>
              <img src='apms/1.png' className='' />
              <img src='apms/2.png' className='absolute w-[50%] top-[32%] left-[15%]' />
            </div>
            <div className='flex flex-col items-start gap-10 w-5/6'>
              <p className='uppercase text-[32px] leading-[1.1] text-[#423ADC]'>03</p>
              <p className='text-[64px] leading-[1.1] text-white'>APMs</p>
              <p className='text-2xl leading-[1.1] text-white'>Accept high-risk cards with smart routing and high approval rates.</p>
              <Button variant="outline">learn more</Button>
            </div>
          </div>
          <div className="h-[560px] bg-[url('/public/bg-4.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
            <div className='relative'>
              <img src='open-banking/2.png' className='' />
              <img src='open-banking/1.png' className='absolute w-[60%] top-[32%] left-[15%]' />
            </div>
            <div className='flex flex-col items-start gap-10 w-5/6'>
              <p className='uppercase text-[32px] leading-[1.1] text-[#423ADC]'>04</p>
              <p className='text-[64px] leading-[1.1] text-white'>Open Banking</p>
              <p className='text-2xl leading-[1.1] text-white'>Accept high-risk cards with smart routing and high approval rates.</p>
              <Button variant="outline">learn more</Button>
            </div>
          </div>
          <div className="h-[560px] bg-[url('/public/bg-5.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
            <div className='relative'>
              <img src='payment-gateway/2.png' className='ml-[5%]' />
              <img src='payment-gateway/1.png' className='absolute w-[75%] top-[28%] left-[5%]' />
            </div>
            <div className='flex flex-col items-start gap-10 w-5/6'>
              <p className='uppercase text-[32px] leading-[1.1] text-[#423ADC]'>05</p>
              <p className='text-[64px] leading-[1.1] text-white'>Payment Gateway</p>
              <p className='text-2xl leading-[1.1] text-white'>Accept high-risk cards with smart routing and high approval rates.</p>
              <Button variant="outline">learn more</Button>
            </div>
          </div>
          {/* <div className="rounded-t-3xl mx-[75px] sm:mx-[33px] lg:mx-[61px] border-[#423ADC40] h-[174px] lg:h-[240px] flex overflow-hidden bg-[url('/public/bg-3.png')] bg-cover"></div> */}
        </div>
      </div>
      <div className='px-20 sm:px-5 lg:px-[60px] py-40 bg-[#F5F4F9] flex items-center justify-center'>
        <img src='photoroom2.png' alt='photoroom2' className='absolute w-[90%]' />
        <div className='w-full flex flex-col z-10'>
          <p className='uppercase text-xl leading-[1.1] text-[#111021]'>
            Boosters
          </p>
          <p className='uppercase text-[48px] xl:text-[72px] leading-[1.1] text-[#111021] mt-5'>
            Upgrade Your Flow
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-20'>
            <div className='bg-[#FFFFFFCC] border border-[#1110210D] rounded-2xl p-8'>
              <div className='w-8 h-8 flex'>
                <div className='w-4 h-8 flex flex-col'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
                <div className='w-4 h-8 flex flex-col justify-end'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
              </div>
              <p className='text-4xl leading-[1.1] text-[#111021] mt-[107px]'>
                Fraud & Risk Managment
              </p>
              <p className='text-2xl leading-[1.1] text-[#111021] mt-[30px]'>
                Stay ahead of threats with intelligent detection, dynamic risk scoring, and automated rule systems that adapt in real time.
              </p>
            </div>
            <div className='bg-[#FFFFFFCC] border border-[#1110210D] rounded-2xl p-8'>
              <div className='w-8 h-8 flex'>
                <div className='w-4 h-8 flex flex-col'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
                <div className='w-4 h-8 flex flex-col justify-end'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
              </div>
              <p className='text-4xl leading-[1.1] text-[#111021] mt-[107px]'>
                Chargeback resolution
              </p>
              <p className='text-2xl leading-[1.1] text-[#111021] mt-[30px]'>
                Minimize revenue loss with automated chargeback handling, clear evidence management, and expert support every step of the way.
              </p>
            </div>
            <div className='bg-[#FFFFFFCC] border border-[#1110210D] rounded-2xl p-8'>
              <div className='w-8 h-8 flex'>
                <div className='w-4 h-8 flex flex-col'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
                <div className='w-4 h-8 flex flex-col justify-end'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
              </div>
              <p className='text-4xl leading-[1.1] text-[#111021] mt-[107px]'>
                Smart Routing + payment orchestration
              </p>
              <p className='text-2xl leading-[1.1] text-[#111021] mt-[30px]'>
                Optimize every transaction through intelligent routing, failover logic, and multi-provider orchestration built for performance.
              </p>
            </div>
            <div className='bg-[#FFFFFFCC] border border-[#1110210D] rounded-2xl p-8'>
              <div className='w-8 h-8 flex'>
                <div className='w-4 h-8 flex flex-col'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
                <div className='w-4 h-8 flex flex-col justify-end'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
              </div>
              <p className='text-4xl leading-[1.1] text-[#111021] mt-[107px]'>
                Global Expansion
              </p>
              <p className='text-2xl leading-[1.1] text-[#111021] mt-[30px]'>
                Reach 200+ countries with localized payment options, currency support, and compliance-ready infrastructure.
              </p>
            </div>
            <div className='bg-[#FFFFFFCC] border border-[#1110210D] rounded-2xl p-8'>
              <div className='w-8 h-8 flex'>
                <div className='w-4 h-8 flex flex-col'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
                <div className='w-4 h-8 flex flex-col justify-end'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
              </div>
              <p className='text-4xl leading-[1.1] text-[#111021] mt-[107px]'>
                Real-Time Analytics
              </p>
              <p className='text-2xl leading-[1.1] text-[#111021] mt-[30px]'>
                Get instant insights into performance, conversion, and risk with customizable dashboards and live data tracking.
              </p>
            </div>
            <div className='bg-[#FFFFFFCC] border border-[#1110210D] rounded-2xl p-8'>
              <div className='w-8 h-8 flex'>
                <div className='w-4 h-8 flex flex-col'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
                <div className='w-4 h-8 flex flex-col justify-end'>
                  <div className='w-4 h-4 bg-[#423ADC]' />
                </div>
              </div>
              <p className='text-4xl leading-[1.1] text-[#111021] mt-[107px]'>
                24/7 Support
              </p>
              <p className='text-2xl leading-[1.1] text-[#111021] mt-[30px]'>
                Rely on dedicated, around-the-clock technical support — fast response, deep expertise, no downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/public/bg.png')] bg-cover bg-no-repeat px-20 sm:px-5 lg:px-[60px] py-40">
        <div className='flex justify-between'>
          <div className='max-w-[870px] w-1/2'>
            <p className='text-[48px] xl:text-[72px] leading-[1.1] text-white'>
              How Get started?
            </p>
            <p className='text-2xl leading-[1.1] text-white mt-10'>
              From Sign-Up to Scaling — Seamlessly.
            </p>
            <img src='get-started.png' className='w-[94%]' />
          </div>
          <div className='max-w-[705px] flex-1'>
            <div className='flex flex-col gap-20'>
              <div className='flex flex-col gap-10'>
                <div className='h-[1px] bg-white' />
                <div className='flex gap-[90px] items-start'>
                  <img src='union1.png' />
                  <div className='flex flex-col gap-[30px]'>
                    <p className='text-white text-4xl leading-[1.1]'>
                      Begin Onboarding Process
                    </p>
                    <p className='text-white text-2xl leading-[1.1]'>
                      KYB approval in 24 hours
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-10'>
                <div className='h-[1px] bg-white' />
                <div className='flex gap-[90px] items-start'>
                  <img src='union2.png' />
                  <div className='flex flex-col gap-[30px]'>
                    <p className='text-white text-4xl leading-[1.1]'>
                      API Integration
                    </p>
                    <p className='text-white text-2xl leading-[1.1]'>
                      Go live in 48 hours (S2S, H2H, Cashier)
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-10'>
                <div className='h-[1px] bg-white' />
                <div className='flex gap-[90px] items-start'>
                  <img src='union3.png' />
                  <div className='flex flex-col gap-[30px]'>
                    <p className='text-white text-4xl leading-[1.1]'>
                      Start Processing Payments Globally
                    </p>
                    <p className='text-white text-2xl leading-[1.1]'>
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
        <div className="h-[640px] bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex items-center px-[50px]">
          <div className='flex flex-col items-start gap-10 w-[40%]'>
            <p className='uppercase text-[32px] leading-[1.1] text-[#423ADC]'>01</p>
            <p className='text-[40px] lg:text-[64px] leading-[1.1] text-white'>Start Processing
              <p className='text-[#423ADC]'>Payments Globally</p>with Speed, Precision, and Full Control
            </p>
            <p className='text-2xl leading-[1.1] text-white'>Integrate quickly and scale across markets — no friction, just flow.</p>
            <Button variant="primary">get started</Button>
          </div>
          <img src='Photoroom3.png' className='absolute right-0 h-[80%]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
