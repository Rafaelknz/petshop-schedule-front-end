<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <a href="/">
          <v-img
            id="logo-nav"
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo-00.png"
            transition="scale-transition"
            width="40"
          />
        </a>
      </div>

      <v-spacer></v-spacer>
        <v-btn  href="/admin/index">PETSHOP SCHEDULE</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {routes} from './routes'
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    routes,
  }),
};
</script>
<style scoped>
#logo-nav {
  border-radius: 50% !important;
  border: 3px solid #ffd387;
}
</style>