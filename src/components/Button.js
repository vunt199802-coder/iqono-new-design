import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyle = 'uppercase flex items-center gap-4 px-8 py-3 rounded-lg font-normal text-[20px] leading-[22px] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  const variants = {
    primary: 'bg-[#423ADC] border border-[#423ADC] hover:bg-[#423ADC44]',
    secondary: 'bg-[#423ADC] border border-[#423ADC] hover:bg-[#423ADC44]',
    outline: 'border border-[#423ADC] text-white hover:bg-[#423ADC44]',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {
        variant === 'primary' ? (
          <div className='flex w-4 h-4'>
            <div className='flex flex-col w-2'>
              <div className='w-2 h-2 bg-white' />
            </div>
            <div className='flex flex-col justify-end w-2'>
              <div className='w-2 h-2 bg-white' />
            </div>
          </div>
        ) : variant === 'outline' ? (
          <ArrowUpRightIcon className='size-4 text-[#423ADC]' />
        ) : null
      }
    </button>
  );
};

export default Button;
