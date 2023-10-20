import { createContext } from 'react';
//import { ThemeState } from '../reducer/ThemeReducer';

interface ThemeContextProps {
  theme: any; // TODO: Se usará el ThemeState
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);
