import { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from '../context/ThemeContext';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';


//Solo es para borrador y guía.
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



const Stack = createStackNavigator();

export const Navigator = () => {

  const {theme, theme: {colors}} = useContext(ThemeContext)
  return (

    <View style={{ backgroundColor: colors.background, flex: 1  }}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: {
                backgroundColor: colors.background,
              },
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="PullToRefreshScreen" component={PullToRefresh} />
            <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
            <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
            <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
            <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
          </Stack.Navigator>

        </NavigationContainer>

    </View>
   
  );
};
