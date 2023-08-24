'use client';

import React from 'react';
interface Props {
  text: string;
  onButtonClick?: () => void;
}

const DestructiveButton = ({ text, onButtonClick = undefined }: Props) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick;
    }
  };
  return (
    <button
      className='w-full max-w-button h-button-sm px-14 capitalize body-lg text-white bg-red rounded-full  hover:bg-lightRed ease-in-out duration-300'
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default DestructiveButton;
