// hooks/useActiveState.ts

import { useState } from 'react';

export const useActiveState = (initialState: string = 'marketing'): [string, (section: string) => void] => {
  const [activeSection, setActiveSection] = useState(initialState);
  
  const toggleSection = (section: string): void => {
    setActiveSection(section);
  };
  
  return [activeSection, toggleSection];
};
