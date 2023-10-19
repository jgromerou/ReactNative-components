import { useReducer } from 'react';
import { ThemeContext } from '../context/themeContext';
import { ThemeReducer, lightTheme } from '../reducer/ThemeReducer';

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(ThemeReducer, lightTheme); //TODO: Leer el tema global del celular..

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
