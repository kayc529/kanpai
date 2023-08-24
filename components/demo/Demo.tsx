'use client';

import React, { useState } from 'react';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import DestructiveButton from '../common/DestructiveButton';
import CheckBox from '../common/CheckBox';
import TextField from '../common/TextField';
import Dropdown from '../common/Dropdown';

const Demo = () => {
  const [checked, setChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleCheckChange = (isChecked: boolean) => {
    if (checked !== isChecked) {
      setChecked(isChecked);
    }
  };

  const handleIndexChange = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  return (
    <section className='w-full py-20 flex flex-col items-center gap-y-5'>
      <div>Demo</div>
      <PrimaryButton text='primary button (L)' />
      <PrimaryButton text='primary button (S)' isSmall={true} />
      <SecondaryButton text='secondary button' />
      <DestructiveButton text='destructive button' />
      <CheckBox
        text='completed'
        isChecked={checked}
        onCheckChange={handleCheckChange}
      />
      <TextField label='Text Field' placeholder='enter task name' />
      <TextField
        label='Text Field'
        placeholder='enter task name'
        isError={true}
        errorMsg="Can't be empty"
      />
      <Dropdown
        label='dropdown'
        options={['Todo', 'Doing', 'Done']}
        placeholder='Select a column'
        selectedIndex={selectedIndex}
        onOptionSelected={handleIndexChange}
      />
    </section>
  );
};

export default Demo;
