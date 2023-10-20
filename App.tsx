import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
//import { ThemeContext } from './src/context/ThemeContext';
import { ThemeProvider } from './src/provider/ThemeProvider';
import { View } from 'react-native';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: string;
//     background: 'dark',
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   },
// };

const App = () => {
  //const { theme } = useContext(ThemeContext);
  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider>
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
};

export default App;
