<template>
    <v-row class="renglon" justify="center" align="center">
      <v-col cols="6">
        <v-form ref="form" v-model="valid">
          <v-card color="#2A8CAE" elevation="6">
            <v-card-title>
              Registro de Usuarios
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="user" type="text" placeholder="Escribe el Nombre del Usuario" label="Usuario" />
              <v-text-field
                v-model="mail"
                type="mail"
                :rules="emailRule"
                placeholder="Escribe el Correo del Usuario"
                label="Correo Electrónico"
              />
              <v-text-field
                v-model="password1"
                type="password"
                :rules="longPassword"
                placeholder="Escribe la Contraseña"
                label="Password"
              />
              <v-text-field
                v-model="password2"
                type="password"
                :rules="matchingPasswords"
                placeholder="Verifica la Contraseña"
                label="Verifica el Password"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn color="green" @click="registraUsuario">
                Registrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    data () {
      return {
        valid: false,
        user: null,
        mail: null,
        password1: null,
        password2: null,
        emailRule: [
          v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        longPassword: [
          (v) => {
            if (!v || v.length < 6) {
              return 'Longitud Invalida'
            }
            return true
          }
        ],
        matchingPasswords: [
          () => {
            if (this.password1 === this.password2) {
              return true
            } else {
              return 'Passwords does not match.'
            }
          }
        ]
      }
    },
    methods: {
      async registraUsuario () {
        this.valid = this.$refs.form.validate()
        if (this.valid) {
          const headers = {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
          }
          const data = {
            name: this.user,
            email: this.mail,
            password: this.password1
          }
          await this.$axios.post('/user/register',
            data,
            { headers }
          ).then((res) => {
            // eslint-disable-next-line no-console
            console.log(res)
          }).catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error)
          })
        } else {
          // eslint-disable-next-line no-console
          console.log('invalid')
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .renglon {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #354551;
  }
  </style>
  