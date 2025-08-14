import React from 'react';
import Button from '../Button';
import FAQ1 from '../FAQ1';

function ReferralProgram() {
  return (
    <>
      <div className="relative bg-[url(/public/Referral.png)] bg-contain bg-no-repeat bg-bottom">
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='flex justify-center md:justify-end'>
            <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4'>
              <p className='uppercase text-white text-[52px] xl:text-[64px] leading-[1.1] mb-10'>
                Earn with Referrals
              </p>
              <p className='text-white text-lg leading-[1.2] mb-[60px] opacity-80'>
                Invite businesses to join and get rewarded for every transaction they make — simple, fast, and scalable.
              </p>
              <div className='flex gap-[30px] flex-col items-start md:flex-row'>
                <Button variant="primary">Get Started</Button>
                <Button variant="outline">About Referral</Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center md:justify-end'>
            <img className='object-cover md:w-2/3' src="/Group1707480753.png" />
          </div>
        </div>
      </div>
      <div className='bg-[#F6F6F6]'>
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='flex mt-[-15%]'>
            <img className='object-cover w-4/5' src="/referral-bg.png" />
          </div>
          <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4'>
            <p className='text-[#111021] text-5xl leading-[1.1] mb-10'>
              How to become referral
            </p>
            <p className='text-[#111021] text-lg leading-[1.2] mb-[60px] opacity-80'>
            Becoming an iQono referral partner is simple, rewarding, and built for scale. Just sign up to access your personal referral link and start sharing it with businesses that could benefit from smarter, more secure payment infrastructure. 

            <br />
            <br />

            Whether it’s a startup, platform, or high-risk merchant — every successful referral earns you real rewards. You’ll get full visibility into clicks, conversions, and payouts through your dashboard, with no limits on how much you can earn.
            </p>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='max-w-[870px] w-full md:w-1/2'>
              <p className='uppercase text-5xl leading-[1.1] text-[#111021]'>
                How Get started?
              </p>
              <p className='text-base leading-[1.1] text-[#111021] mt-10 opacity-80'>
                From Sign-Up to Scaling — Seamlessly.
              </p>
              <img src='/referral1.png' className='w-[80%]' />
            </div>
            <div className='max-w-[705px] w-full md:w-1/2'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[25px]' src='/union4.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Join iQono
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        KYB approval in 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[30px]' src='/union1.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Connect Companies
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Share your unique link with businesses in need of smarter payment tools.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[25px]' src='/union5.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Unlock Earnings
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Earn commissions on every transaction your network generates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] bg-[#11102140]' />
              </div>
              <Button variant="primary" className='mt-[60px]'>Get Started</Button>
            </div>
          </div>
          <div className='bg-[url(/public/partners2.png)] bg-contain bg-no-repeat bg-right pt-10 pb-20'>
            <p className='uppercase text-5xl text-[#111021]'>benefits of being our referral</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[60px] gap-5'>
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>Passive Income Stream</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Earn ongoing rewards every time your referral transacts</p>
              </div>
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>Transparent Tracking</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Get full visibility into clicks, signups, and payouts in real time.</p>
              </div>
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>Fast & Flexible Payouts</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Receive your earnings instantly — no limits, no delays.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[url(/public/refer-bg.png)] bg-cover bg-no-repeat'>
        <div className='container mx-auto px-4 pb-20'>
          <div className='flex flex-col gap-10'>
            <p className='uppercase text-5xl text-white mt-20'>why refer to us?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer1.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Geolocation-based Routing</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer2.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Cascading with Failover Logic</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer3.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Load Balancing Across Acquirers</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer4.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Remember Me Tokenization</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer5.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Advanced Fraud Detection Models</p>
              </div>
              <div className='h-[250px] rounded-2xl bg-[#423ADC0D] border border-[#423ADC0D] p-6 flex flex-col justify-between'>
                <div className='w-[60px] h-[60px] flex items-center justify-center bg-[#423ADC0D] border border-[#423ADC40] rounded-xl'>
                  <img src='/refer6.png' className='w-6' />
                </div>
                <p className='text-white text-2xl'>Real-time Approval Rate Monitoring</p>
              </div>
            </div>
          </div>
          <div className='mt-40'>
            <FAQ1 />
          </div>
          <div className="bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex flex-col md:flex-row items-end">
            <div className='md:w-1/2 flex flex-col items-start gap-10 px-[30px] py-[50px]'>
              <p className='text-5xl leading-[1.1] text-white'>
                <span className='text-[#C6DC3A]'> Start Earning </span>with Every Referral
              </p>
              <p className='text-lg leading-[1.1] text-white opacity-60'>Integrate quickly and scale across markets — no friction, just flow.</p>
              <Button variant="primary">get started</Button>
            </div>
            <div className='w-full md:w-1/2 mt-10 md:mt-0'>
              <img src='/Photoroom7.png' className='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralProgram;
