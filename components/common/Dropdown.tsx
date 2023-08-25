'use client';

import React, { useState, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface Props {
  label: string;
  options?: string[];
  placeholder?: string;
  selectedIndex?: number;
  onOptionSelected?: (index: number) => void;
}
const Dropdown = ({
  label,
  options = [],
  placeholder = ' ',
  selectedIndex = -1,
  onOptionSelected = undefined,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const realOptions = [placeholder, ...options];

  console.log(realOptions);
  //TODO may have bugs here
  useEffect(() => {
    addEventListener('click', (e: MouseEvent) => {
      if (e.target instanceof Element) {
        let isDropdownButton = e.target?.matches('[data-dropdown-button]');
        if (
          !isDropdownButton &&
          e.target?.closest('[data-dropdown]') !== null
        ) {
          return;
        } else {
          setIsOpen(false);
        }
      }
    });

    return () => {
      document.removeEventListener('click', (e) => {});
    };
  }, []);

  const getArrowStyle = () => {
    return isOpen ? 'rotate-180' : '';
  };

  const getDropdownStyle = () => {
    return isOpen ? 'dropDown active' : 'dropDown';
  };

  const handleOptionSelected = (index: number) => {
    if (onOptionSelected) {
      onOptionSelected(index);
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='relative w-full max-w-dropdown flex flex-col'>
      <label className='mb-2 capitalize body-lg text-mediumGrey'>{label}</label>
      <button
        className='relative w-full h-dropdown px-4 capitalize body-lg text-black bg-white border border-mediumGrey-25 rounded-sm flex justify-between items-center focus:border-blue'
        onClick={() => setIsOpen((prev) => !prev)}
        data-dropdown
      >
        {selectedIndex === -1 ? placeholder : options[selectedIndex]}
      </button>
      <BiChevronDown
        className={`absolute top-11 right-4 w-5 h-5 text-blue cursor-pointer ease-in-out duration-300 ${getArrowStyle()}`}
        onClick={() => setIsOpen((prev) => !prev)}
        data-dropdown
      />
      <div className={getDropdownStyle()} data-dropdown>
        {realOptions.map((option, index) => (
          <button
            className='w-full h-dropdownOption px-4 body-lg text-mediumGrey text-start hover:bg-lightGrey'
            key={option}
            disabled={!isOpen}
            onClick={() => handleOptionSelected(index - 1)}
            data-dropdown-button
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
