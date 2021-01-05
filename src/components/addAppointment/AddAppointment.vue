<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <form>
          <div>
            <label class="mr-2">Teste</label>
            <input class="input" type="text" style="width: 100px"/>
          </div>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'AddAppointment',

  data: () => ({

  }),

  created() {
    this.$http.get('http://localhost:3000/customer-services')
        .then(res => res.json())
  }
}
</script>
<style scoped>
  .input {
    background-color: white;
    color: black;
  }
</style>