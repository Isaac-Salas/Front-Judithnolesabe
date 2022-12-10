<template>
    <v-row>
      <v-col cols="6">
        <RegisterVue />
      </v-col>
      <v-col cols="6">
        <UsuariosVue />
      </v-col>
    </v-row>
</template>

  <script>
import RegisterVue from '~/components/users/RegisterVue.vue'
import UsuariosVue from '~/components/users/UsuariosVue.vue';
  export default {
    name: "Index",
    auth: true, //true
    components: { RegisterVue, UsuariosVue },
    layout: "DashboardVue"
}
  </script>