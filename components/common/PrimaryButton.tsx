'use client';

import React from 'react';

interface Props {
  text: string;
  onButtonClick?: () => void;
  isSmall?: boolean;
}

const PrimaryButton = ({
  text,
  onButtonClick = undefined,
  isSmall = false,
}: Props) => {
  const handleOnClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  const getSizeStyle = () => {
    return isSmall ? 'h-button-sm body-lg' : 'h-button-lg heading-md';
  };

  return (
    <button
      className={`w-full max-w-button ${getSizeStyle()} px-14 capitalize text-white bg-blue rounded-full hover:bg-lightBlue ease-in-out duration-300`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
