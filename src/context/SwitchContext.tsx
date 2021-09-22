import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';
import { usePersistedState } from './usePersistedState';

type SwitchContextProps = {
  children: ReactNode;
}

type SwitchContextData = {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

export const SwitchContext = createContext({} as SwitchContextData);

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
