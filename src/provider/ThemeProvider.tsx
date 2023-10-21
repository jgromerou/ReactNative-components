// import { ThemeReducer, lightTheme } from '../reducer/ThemeReducer';
import React, {useReducer} from 'react';
// import { AppState, Appearance } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeReducer, darkTheme, lightTheme } from '../reducer/ThemeReducer';

export const ThemeProvider = ({ children }: any) => {
  //const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(ThemeReducer, lightTheme); //TODO: Leer el tema global del celular hacer el ternario con el darkTheme y el lightTheme..

  //Todo: este permite cambiar el theme segun el Sistema operativo
  // useEffect(() => {
  //   AppState.addEventListener('change', (status) => {
  //     console.log({ status });
  //     if (status === 'active') {
  //       Appearance.getColorScheme() === 'light' ? setLightTheme : setDarkTheme;
  //     }
  //   });
  // }, []);

  //Solo  en IOS funcion este useEffect
  // useEffect(() => {
  //   colorScheme === 'light' ? setLightTheme : setDarkTheme;
  // }, [colorScheme]);

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
