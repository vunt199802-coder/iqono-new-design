import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQ = ({ questions, pageType }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Default dummy answers for all FAQs
  const dummyAnswer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  // Questions specific to each page type (product or booster)
  const defaultQuestions = {
    product: [
      { question: "What payment methods are supported?", answer: dummyAnswer },
      { question: "How long does integration take?", answer: dummyAnswer },
      { question: "What are the transaction fees?", answer: dummyAnswer },
      { question: "Is there a setup fee?", answer: dummyAnswer },
      { question: "Which countries do you support?", answer: dummyAnswer },
      { question: "How secure is the platform?", answer: dummyAnswer },
      { question: "Do you offer technical support?", answer: dummyAnswer },
      { question: "Can I customize the checkout experience?", answer: dummyAnswer },
    ],
    booster: [
      { question: "How does this feature improve conversion rates?", answer: dummyAnswer },
      { question: "Is this included in all plans?", answer: dummyAnswer },
      { question: "Can I use this feature with my existing setup?", answer: dummyAnswer },
      { question: "How is performance measured?", answer: dummyAnswer },
      { question: "What makes this better than competitors?", answer: dummyAnswer },
      { question: "Do you provide implementation support?", answer: dummyAnswer },
      { question: "How quickly can I see results?", answer: dummyAnswer },
      { question: "Is there any additional cost?", answer: dummyAnswer },
    ]
  };

  // Use provided questions or default ones based on pageType
  const faqQuestions = questions || defaultQuestions[pageType] || defaultQuestions.product;

  return (
    <div className='flex flex-col gap-6 md:gap-10 container mx-auto px-4 pb-20 mt-[-30px] md:mt-[-50px]'>
      <p className='text-3xl md:text-5xl text-[#111021]'>FAQ</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {faqQuestions.map((item, index) => (
          <div 
            key={index}
            className='bg-[#FCFCFC] rounded-2xl px-5 py-3 cursor-pointer h-auto'
            style={{ height: openIndex === index ? 'auto' : undefined }}
            onClick={() => toggleQuestion(index)}
          >
            <div className='flex items-center justify-between gap-2 md:gap-6'>
              <p className='text-lg md:text-2xl text-[#111021] pr-2'>{item.question}</p>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUpIcon className='size-4 text-[#1F1F1F]' />
                ) : (
                  <ChevronDownIcon className='size-4 text-[#1F1F1F]' />
                )}
              </div>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300`}
              style={{ 
                maxHeight: openIndex === index ? '1000px' : '0',
                opacity: openIndex === index ? 1 : 0
              }}
            >
              <div className='mt-3 text-sm md:text-base text-[#111021] opacity-80 pb-2'>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;