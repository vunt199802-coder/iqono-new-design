import React from 'react';
import Button from './Button';

const Home = () => {
  return (
    <div >
      <div className="relative bg-[url(/public/iQono.png)] bg-contain bg-no-repeat bg-bottom">
        <div className='grid sm:grid-cols-2 items-center justify-between'>
          <div className='flex justify-end'>
            <div className='w-full z-10 max-w-[320px] md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] pl-4'>
              <p className='uppercase text-white text-[52px] xl:text-[64px] leading-[1.1] mb-10'>
                Accelerate Payments. Maximize Acceptance. Go Global.
              </p>
              <p className='text-white text-lg leading-[1.2] mb-[60px] opacity-80'>
                High-risk friendly. Global-ready. Start processing in under 48 hours.
              </p>
              <div className='flex gap-[30px]'>
                <Button variant="primary">Get Started</Button>
                <Button variant="outline">About us</Button>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <img className='object-cover w-2/3' src="/Group1707480780.png" />
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-[transparent] to-[#423ADC55] mt-20'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-5 w-[35%]'>
              <p className='uppercase text-white text-base leading-[1.1] opacity-80'>
                Products
              </p>
              <p className='uppercase text-white text-[52px] xl:text-[64px] leading-[1.1]'>
                All-In-One Payment Stack
              </p>
            </div>
            <div className='w-1/2 flex items-center'>
              <p className='w-[70%] text-white text-lg leading-[1.1] opacity-80'>
                iQono delivers a full-stack payment suite — from card acquiring and payouts to APMs and Open Banking. Built for performance, scalability, and global reach.
              </p>
            </div>
          </div>
          <div className='mt-20 flex flex-col gap-10'>
            <div className="h-[400px] bg-[url('/public/bg-1.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
              <img src='/payment1.png' />
              <div className='flex flex-col items-start gap-10 w-5/6'>
                <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>01</p>
                <p className='text-5xl leading-[1.1] text-white'>Payouts solutions</p>
                <p className='text-lg leading-[1.1] text-white opacity-80'>Global payouts in local currencies — fast, automated, and compliant.</p>
                <Button variant="outline">learn more</Button>
              </div>
            </div>
            <div className="h-[400px] bg-[url('/public/bg-2.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
              <img src='/payment2.png' />
              <div className='flex flex-col items-start gap-10 w-5/6'>
                <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>02</p>
                <p className='text-5xl leading-[1.1] text-white'>Card acquiring</p>
                <p className='text-lg leading-[1.1] text-white opacity-80'>Accept high-risk cards with smart routing and high approval rates.</p>
                <Button variant="outline">learn more</Button>
              </div>
            </div>
            <div className="h-[400px] bg-[url('/public/bg-3.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
              <div className='relative'>
                <img src='/apms/1.png' className='' />
                <img src='/apms/2.png' className='absolute w-[50%] top-[32%] left-[15%]' />
              </div>
              <div className='flex flex-col items-start gap-10 w-5/6'>
                <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>03</p>
                <p className='text-5xl leading-[1.1] text-white'>APMs</p>
                <p className='text-lg leading-[1.1] text-white opacity-80'>Accept high-risk cards with smart routing and high approval rates.</p>
                <Button variant="outline">learn more</Button>
              </div>
            </div>
            <div className="h-[400px] bg-[url('/public/bg-4.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
              <div className='relative'>
                <img src='/open-banking/2.png' className='' />
                <img src='/open-banking/1.png' className='absolute w-[60%] top-[32%] left-[15%]' />
              </div>
              <div className='flex flex-col items-start gap-10 w-5/6'>
                <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>04</p>
                <p className='text-5xl leading-[1.1] text-white'>Open Banking</p>
                <p className='text-lg leading-[1.1] text-white opacity-80'>Accept high-risk cards with smart routing and high approval rates.</p>
                <Button variant="outline">learn more</Button>
              </div>
            </div>
            <div className="h-[400px] bg-[url('/public/bg-5.png')] bg-cover bg-no-repeat rounded-3xl grid md:grid-cols-2 items-center content-center">
              <div className='relative'>
                <img src='/payment-gateway/2.png' className='ml-[5%] w-3/4' />
                <img src='/payment-gateway/1.png' className='absolute w-3/4 top-[26%] left-[4%]' />
              </div>
              <div className='flex flex-col items-start gap-10 w-5/6'>
                <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>05</p>
                <p className='text-5xl leading-[1.1] text-white'>Payment Gateway</p>
                <p className='text-lg leading-[1.1] text-white opacity-80'>Accept high-risk cards with smart routing and high approval rates.</p>
                <Button variant="outline">learn more</Button>
              </div>
            </div>
            {/* <div className="rounded-t-3xl mx-[75px] sm:mx-[33px] lg:mx-[61px] border-[#423ADC40] h-[174px] lg:h-[240px] flex overflow-hidden bg-[url('/public/bg-3.png')] bg-cover"></div> */}
          </div>
        </div>
      </div>
      <div className='px-4 py-20 bg-[#F5F4F9]'>
        <div className='container mx-auto flex items-center justify-center px-4'>
          <img src='/photoroom2.png' alt='photoroom2' className='absolute w-[90%]' />
          <div className='w-full flex flex-col z-10'>
            <p className='uppercase text-xl leading-[1.1] text-[#111021] opacity-80'>
              Boosters
            </p>
            <p className='uppercase text-5xl leading-[1.1] text-[#111021] mt-5'>
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
                <p className='text-2xl leading-[1.1] text-[#111021] mt-[60px]'>
                  Fraud & Risk Managment
                </p>
                <p className='text-base leading-[1.1] text-[#111021] mt-5 opacity-80'>
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
                <p className='text-2xl leading-[1.1] text-[#111021] mt-[60px]'>
                  Chargeback resolution
                </p>
                <p className='text-base leading-[1.1] text-[#111021] mt-5 opacity-80'>
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
                <p className='text-2xl leading-[1.1] text-[#111021] mt-[60px]'>
                  Smart Routing + payment orchestration
                </p>
                <p className='text-base leading-[1.1] text-[#111021] mt-5 opacity-80'>
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
                <p className='text-2xl leading-[1.1] text-[#111021] mt-[60px]'>
                  Global Expansion
                </p>
                <p className='text-base leading-[1.1] text-[#111021] mt-5 opacity-80'>
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
                <p className='text-2xl leading-[1.1] text-[#111021] mt-[60px]'>
                  Real-Time Analytics
                </p>
                <p className='text-base leading-[1.1] text-[#111021] mt-5 opacity-80'>
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
                <p className='text-2xl leading-[1.1] text-[#111021] mt-[60px]'>
                  24/7 Support
                </p>
                <p className='text-base leading-[1.1] text-[#111021] mt-5 opacity-80'>
                  Rely on dedicated, around-the-clock technical support — fast response, deep expertise, no downtime.
                </p>
              </div>
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
          <div className="bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex items-end mt-10">
            <div className='w-1/2 flex flex-col items-start gap-10 px-[30px] py-[50px]'>
              <p className='uppercase text-xl leading-[1.1] text-[#423ADC]'>01</p>
              <p className='text-5xl leading-[1.1] text-white'>Start Processing
                <span className='text-[#423ADC]'> Payments Globally </span>with Speed, Precision, and Full Control
              </p>
              <p className='text-lg leading-[1.1] text-white opacity-60'>Integrate quickly and scale across markets — no friction, just flow.</p>
              <Button variant="primary">get started</Button>
            </div>
            <div>
              <img src='/Photoroom3.png' className='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
