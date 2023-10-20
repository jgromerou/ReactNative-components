import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'pink', // TODO: rgba(0, 0, 0,0.6)
  dark: false,
  colors: {
    primary: '#084F6A',
    background: 'blue',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'red', // TODO: rgba(255, 255, 255,0.6)
  dark: true,
  colors: {
    primary: '#75CEDB',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
};

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };

    case 'set_dark_theme':
      return { ...darkTheme };

    default:
      return state;
  }
};
