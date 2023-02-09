import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#15202b',
    primary: '#3f51b5',
    secondary: '#03dac6',
    error: '#f44336',
    info: '#2196F3',
    success: '#4caf50',
    warning: '#F50057',
  },
};

const customLightTheme = {
  dark: false,
  colors: {
    background: "#212121",
    surface: "#15202b",
    primary: "#3f51b5",
    secondary: "E57373",
    error: "#ffcc00",
    warning: '#F50057'
  },
};
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customDarkTheme,
      customLightTheme,
    },
  },
});
