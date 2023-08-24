'use client';

import React, { useRef } from 'react';

interface Props {
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onTextChange?: (text: string) => void;
  isError?: boolean;
  errorMsg?: string;
}

const TextField = ({
  label,
  value = 'hihisdjfvjhsdfvhjsfvhjsdjhfvjsfsdufsfuysdgfusgfuysgduyfgsuygsfuy',
  placeholder = '',
  type = 'text',
  onTextChange = undefined,
  isError = false,
  errorMsg = '',
}: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onTextChange) {
      onTextChange(e.target.value);
    }
  };

  const getBorderStyle = () => {
    return isError ? 'border-red' : 'border-mediumGrey-25';
  };

  return (
    <div className='relative w-full max-w-textField flex flex-col'>
      <label
        htmlFor='textField'
        className='mb-2 body-md text-mediumGrey text-start'
      >
        {label}
      </label>
      <div
        className={`border ${getBorderStyle()} rounded-sm flex items-center`}
      >
        <input
          id='textField'
          className={`w-full h-textField py-2 px-4 body-lg text-black placeholder:text-black-25 placeholder:capitalize rounded-sm focus:outline-none`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
        />
        {isError && (
          <p className='w-max pr-4 body-lg text-red whitespace-nowrap'>
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextField;
