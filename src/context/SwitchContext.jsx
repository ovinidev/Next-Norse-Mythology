import { createContext, useState } from 'react';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';
import { usePersistedState } from './usePersistedState';

export const SwitchContext = createContext();

export const SwitchContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <SwitchContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SwitchContext.Provider>
  );
};
