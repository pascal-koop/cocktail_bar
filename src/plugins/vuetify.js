import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
});
