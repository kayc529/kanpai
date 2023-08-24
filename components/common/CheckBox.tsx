'use client';

import React from 'react';

interface Props {
  text: string;
  isChecked?: boolean;
  onCheckChange?: (isCheck: boolean) => void;
}

const CheckBox = ({
  text,
  isChecked = false,
  onCheckChange = undefined,
}: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isChecked = e.target.checked;
    if (onCheckChange) {
      onCheckChange(isChecked);
    }
  };

  const getTextStyle = () => {
    return isChecked
      ? 'line-through text-linesDark'
      : 'no-underline text-black';
  };

  return (
    <div className='w-full max-w-checkbox h-checkbox px-4 bg-lightGrey rounded-sm hover:bg-blue-25 flex justify-start items-center ease-in-out duration-300'>
      <input
        id='checkbox'
        type='checkbox'
        onChange={handleOnChange}
        checked={isChecked}
        className='w-0 h-0'
      />
      <label
        htmlFor='checkbox'
        className='relative w-4 h-4 mr-4 bg-white border border-mediumGrey-25 rounded-sm ease-in-out duration-100'
      ></label>
      <p className={`${getTextStyle()} capitalize body-md`}>{text}</p>
    </div>
  );
};

export default CheckBox;
