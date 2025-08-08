import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQ1 = ({ questions, pageType }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const dummyAnswer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const defaultQuestions = {
    product: [
      { question: "Who can join the referral programme?", answer: dummyAnswer },
      { question: "How is my commission calculated?", answer: dummyAnswer },
      { question: "How do I refer a business?", answer: dummyAnswer },
      { question: "Do I need to be a Finera client?", answer: dummyAnswer },
      { question: "What is the minimum payout amount?", answer: dummyAnswer },
      { question: "How do I refer a business?", answer: dummyAnswer },
      { question: "When do I get paid?", answer: dummyAnswer },
      { question: "Can I refer multiple businesses?", answer: dummyAnswer },
    ]
  };

  const faqQuestions = questions || defaultQuestions[pageType] || defaultQuestions.product;

  return (
    <div className='flex flex-col gap-10 container mx-auto px-4 pb-20 mt-[-50px]'>
      <p className='text-5xl text-white'>FAQ</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {faqQuestions.map((item, index) => (
          <div
            key={index}
            className='bg-[#423ADC0D] border border-[#FFFFFF0D] rounded-2xl px-5 py-3 cursor-pointer h-auto'
            style={{
              minHeight: '64px',
              height: openIndex === index ? 'auto' : '64px'
            }}
            onClick={() => toggleQuestion(index)}
          >
            <div className='flex items-center justify-between gap-6'>
              <p className='text-2xl text-white'>{item.question}</p>
              {openIndex === index ? (
                <ChevronUpIcon className='size-4 text-white flex-shrink-0' />
              ) : (
                <ChevronDownIcon className='size-4 text-white flex-shrink-0' />
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300`}
              style={{
                maxHeight: openIndex === index ? '500px' : '0',
                opacity: openIndex === index ? 1 : 0
              }}
            >
              <div className='mt-3 text-white opacity-80 pb-2'>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ1;