import React from 'react';

const Board = () => {
  return (
    <div className='w-full h-full flex gap-x-4 overflow-x-scroll'>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
      <div className='min-w-[150px] h-full bg-green-300'>column</div>
    </div>
  );
};

export default Board;
