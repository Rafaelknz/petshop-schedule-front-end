import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.shades.white, // #E53935
                secondary: colors.amber.accent1, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
  },
});
