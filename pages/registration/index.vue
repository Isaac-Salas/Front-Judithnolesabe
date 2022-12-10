<template>


      <v-col cols="6" style="align-self: center;">
        <v-row>
            <RegisterVue />
        </v-row>
        <v-row>
            <v-btn color="red" href="/">Regresar</v-btn>
        </v-row>
      </v-col>
      

</template>

  <script>
import RegisterVue from '~/components/users/RegisterVue.vue'

  export default {
    name: "Index",
    auth: false, //false
    components: { RegisterVue},
    layout: "RegistrationVue"
}
  </script>