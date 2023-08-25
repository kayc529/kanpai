'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface LayoutContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen?: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<LayoutContextProps>({
  isSidebarOpen: false,
});

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </LayoutContext.Provider>
  );
};
