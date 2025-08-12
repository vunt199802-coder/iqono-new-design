import React from 'react';
import Button from '../Button';
import FAQ1 from '../FAQ1';

function PartnerWithUs() {
  return (
    <>
      <div className="relative bg-[url(/public/Partners.png)] bg-contain bg-no-repeat bg-bottom mt-[-72px]">
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='flex justify-center md:justify-end' data-aos="fade-right" data-aos-delay="100">
            <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4'>
              <p className='uppercase text-white text-[52px] xl:text-[64px] leading-[1.1] mb-10'>
                Where Ambitious Partners Scale
              </p>
              <p className='text-white text-lg leading-[1.2] mb-[60px] opacity-80'>
                Partner with us and unlock access to cutting-edge payment solutions, high commissions, and global growth opportunities — all in one platform.
              </p>
              <div className='flex gap-[30px]'>
                <Button variant="primary">Get Started</Button>
                <Button variant="outline">About partnership</Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center md:justify-end' data-aos="fade-left" data-aos-delay="200">
            <img className='object-cover' src="/Group1707480808.png" />
          </div>
        </div>
      </div>
      <div className='bg-[#F6F6F6]'>
        <div className='grid md:grid-cols-2 items-center justify-between'>
          <div className='absolute left-0 md:relative flex mt-[-15%]' data-aos="fade-right" data-aos-delay="100">
            <img className='object-cover w-1/3 md:w-2/3' src="/partners-bg.png" />
          </div>
          <div className='w-full z-10 max-w-full px-4 md:max-w-[384px] lg:max-w-[512px] xl:max-w-[640px] 2xl:max-w-[768px] md:pl-4' data-aos="fade-left" data-aos-delay="200">
            <p className='text-[#111021] text-5xl leading-[1.1] mb-10 mt-10 md:mt-0'>
              How to become partners
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
            <div className='max-w-[870px] w-full md:w-1/2' data-aos="fade-right" data-aos-delay="100">
              <p className='uppercase text-5xl leading-[1.1] text-[#111021]'>
                How Get started?
              </p>
              <p className='text-base leading-[1.1] text-[#111021] mt-10 opacity-80'>
                From Sign-Up to Scaling — Seamlessly.
              </p>
              <img src='/partner1.png' className='w-[80%]' />
            </div>
            <div className='max-w-[705px] w-full md:w-1/2' data-aos="fade-left" data-aos-delay="200">
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                  <div className='h-[1px] bg-[#11102140]' />
                  <div className='flex gap-[30px] items-start'>
                    <img className='w-[30px] h-[25px]' src='/union4.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Full-Spectrum Payment Tools
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Provide access to cards, local methods, and banking APIs.
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
                    <img className='w-[30px] h-[25px]' src='/union5.png' />
                    <div className='flex flex-col gap-[30px]'>
                      <p className='text-[#111021] text-2xl leading-[1.1]'>
                        Business Onboarding Opportunities
                      </p>
                      <p className='text-[#111021] text-base leading-[1.1] opacity-60'>
                        Introduce merchants seeking seamless, scalable payment solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] bg-[#11102140]' />
              </div>
              <Button variant="primary" className='mt-[60px]'>Get Started</Button>
            </div>
          </div>
          <div className='bg-[url(/public/referral2.png)] bg-contain bg-no-repeat bg-right pt-10 pb-20'>
            <p className='uppercase text-5xl text-[#111021]' data-aos="fade-up" data-aos-delay="100">benefits of being our Partners</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[60px] gap-5' data-aos="fade-up" data-aos-delay="200">
              <div className='flex flex-col bg-[rgba(255,255,255,0.8)] rounded-2xl p-6'>
                <div className='w-8 h-8 flex'>
                  <div className='w-4 h-8 flex flex-col'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                  <div className='w-4 h-8 flex flex-col justify-end'>
                    <div className='w-4 h-4 bg-[#423ADC]' />
                  </div>
                </div>
                <p className='text-[#111021] text-2xl mt-[60px]'>High-Revenue Opportunities</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Earn competitive commissions by connecting high-value clients.</p>
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
                <p className='text-[#111021] text-2xl mt-[60px]'>Scalable Collaboration</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Grow alongside us with flexible tools, support, and co-marketing options.</p>
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
                <p className='text-[#111021] text-2xl mt-[60px]'>Full Transparency & Control</p>
                <p className='text-[#111021] text-lg opacity-80 mt-5'>Track every lead, conversion, and payout in real time through your dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[url(/public/refer-bg.png)] bg-cover bg-no-repeat'>
        <div className='container mx-auto px-4 pb-20'>
          <div className='flex flex-col gap-10'>
            <p className='uppercase text-5xl text-white mt-20' data-aos="fade-up" data-aos-delay="100">why refer to us?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5' data-aos="fade-up" data-aos-delay="200">
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
          <div className='mt-40' data-aos="fade-up" data-aos-delay="100">
            <FAQ1 />
          </div>
          <div className="bg-[#423ADC0D] border border-[#423ADC40] bg-cover bg-no-repeat rounded-3xl flex flex-col md:flex-row items-end" data-aos="fade-up" data-aos-delay="200">
            <div className='md:w-1/2 flex flex-col items-start gap-10 px-[30px] py-[50px]'>
              <p className='text-5xl leading-[1.1] text-white'>
                <span className='text-[#C6DC3A]'> Partner Up. </span>Grow Together.
              </p>
              <p className='text-lg leading-[1.1] text-white opacity-60'>Integrate quickly and scale across markets — no friction, just flow.</p>
              <Button variant="primary">get started</Button>
            </div>
            <div className='w-full md:w-1/2 mt-10 md:mt-0'>
              <img src='/Photoroom8.png' className='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerWithUs;
