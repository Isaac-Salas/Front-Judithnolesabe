<template>
  <v-card elevation="5" width="700" color=#0097A7 style="display: flex;">
    <v-col cols="4" style="align-self: center;">
      <v-img :src="require('~/assets/images/login.jpeg')" />
    </v-col>
    <v-col>
      <v-card-title> LOGIN </v-card-title>
      <v-card-text>
        <v-text-field v-model="email" type="mail" :rules="emailRule" placeholder="Escribe tu correo" />
        <v-text-field v-model="password" type="password" placeholder="Escribe tu contraseña" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="green" @click="login">
          Login
        </v-btn>
        <v-btn>
          Cancel
        </v-btn>
      </v-card-actions>
    </v-col>
    <v-col cols="6" style="align-self: center;">
          <v-card-title> Si no tienes cuenta... </v-card-title>
          <v-btn color="teal" href="\registration">Registrate</v-btn>
        </v-col>
   
  </v-card>



</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      emailRule: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async login () {
      const user = {
        email: this.email,
        password: this.password
      }
      await this.$auth.loginWith('local', {
        data: user
      }).then((res) => {
        this.$router.push('/dashboard')
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error)
      })
    }
  }
}
</script>
