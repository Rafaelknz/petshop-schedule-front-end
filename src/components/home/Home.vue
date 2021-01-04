<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <img
          :src="require('../../assets/logo-00.png')"
          :elevation="20"
          class="my-3"
          id="mainimg"
          contain
          height="300"
        />
      </v-col>

      <v-col class="mb-4">
        <span id="maintitle" class="display-2 font-weight-bold mb-3">
          PETSHOP SCHEDULE
        </span>
      </v-col>
    </v-row>
    <center>
      <v-btn color="secondary" class="black--text">
      schedule an appointment
      </v-btn>
    </center>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({

    }),

    created() {
      this.$http.get('http://localhost:3000/customer-services')
          .then(res => res.json())
    }
  }
</script>
<style scoped>
  #mainimg {
    border-radius: 50% !important;
    border: 3px solid #ffd387;
  }
  #maintitle {
    font-size: 2em;
    color: #ffd387;
  }
</style>
