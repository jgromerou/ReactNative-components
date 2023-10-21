import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/provider/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
        <Navigator />
    </ThemeProvider>
  );
};

export default App;
