'use client';

import React, { useContext, useState } from 'react';
import { LayoutContext } from '@/contexts/LayoutContext';
import Logo from '../common/Logo';
import { dummyBoardData } from '@/data/dummyData';
import { BiHide } from 'react-icons/bi';
import ThemeSwitch from '../common/ThemeSwitch';

const SideBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(LayoutContext);
  const [boards, setBoard] = useState(dummyBoardData);

  const toggleSideBar = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen((prev) => !prev);
    }
  };

  const getSidebarState = () => {
    return isSidebarOpen ? 'active' : '';
  };

  const getSidebarButtonState = () => {
    return isSidebarOpen ? '' : 'active';
  };

  return (
    <>
      {/* sidebar */}
      <aside className={`sidebar p-8 bg-white ${getSidebarState()}`}>
        <div className='w-full mb-14 flex justify-start'>
          <Logo />
        </div>

        <p className='w-full uppercase body-lg text-mediumGrey text-start'>{`all board (${dummyBoardData.length})`}</p>

        {/* list of boards */}
        <ul className='w-full py-5 flex flex-col items-start'>
          {boards.map((board) => (
            <li>{board}</li>
          ))}
        </ul>

        {/* create new board */}
        <div></div>

        {/* theme switch */}
        <ThemeSwitch />

        {/* hide sidebar button */}
        <div className='relative w-full mt-auto'>
          <BiHide className='absolute left-0 top-1 w-4 h-4 text-mediumGrey' />
          <button
            className='w-full pl-8 capitalize heading-md text-mediumGrey text-start'
            onClick={toggleSideBar}
          >
            hide sidebar
          </button>
        </div>
      </aside>

      {/* sidebar button */}
      <div
        className={`sidebar-btn ${getSidebarButtonState()}`}
        onClick={toggleSideBar}
      >
        <div className='relative'>
          <button className='w-20 h-button-sm rounded-full bg-blue'></button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
