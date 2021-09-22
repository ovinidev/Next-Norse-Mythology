import { createContext, ReactNode, useState } from 'react';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';
import { usePersistedState } from './usePersistedState';

type SwitchContextProps = {
  children: ReactNode;
  toggleTheme: () => void;
}

export const SwitchContext = createContext({} as SwitchContextProps);

export const SwitchContextProvider = ({ children }: SwitchContextProps) => {
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
