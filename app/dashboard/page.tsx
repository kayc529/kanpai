'use client';

import Board from '@/components/board/Board';
import SideBar from '@/components/sidebar/SideBar';
import React, { useContext } from 'react';
import { LayoutContext } from '@/contexts/LayoutContext';
const page = () => {
  const { isSidebarOpen } = useContext(LayoutContext);

  const getBoardState = () => {
    return isSidebarOpen ? '' : 'hide';
  };

  return (
    <div className={`board ${getBoardState()}`}>
      <SideBar />
      <Board />
    </div>
  );
};

export default page;
