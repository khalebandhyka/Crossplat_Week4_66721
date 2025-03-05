import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const theme = {
  dark: {
    ...DarkTheme,
    colors: {
      primary: '#191970', 
      background: '#333333',
      text: 'white',
    },
  },
  light: {
    ...DefaultTheme,
    colors: {
      primary: '#ffffff',
      background: '#f8f8f8',
      text: 'black',
    },
  },
};