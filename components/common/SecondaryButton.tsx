'use client';

import React from 'react';
interface Props {
  text: string;
  onButtonClick?: () => void;
}
const SecondaryButton = ({ text, onButtonClick = undefined }: Props) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick;
    }
  };
  return (
    <button
      className='w-full max-w-button h-button-sm px-14 capitalize body-lg text-blue bg-blue-10 rounded-full  hover:bg-blue-25 ease-in-out duration-300'
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
