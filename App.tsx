import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import React, { useContext } from 'react';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/provider/themeProvider';
import { ThemeContext } from './src/context/themeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: string;
//     //background: 'black',
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   },
// };

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <NavigationContainer theme={theme}>
        <Navigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
