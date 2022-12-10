<template>
  <v-row class="renglon">
    <v-col cols="12">
      <v-card color="blue" elevation="6">
        <v-card-title>
          Usuarios
        </v-card-title>

        <v-row align="center" justify="end" class="pa-4">
          <v-btn color="green" @click="obtenerUsuarios">
            Refresh
          </v-btn>
        </v-row>

        <!-- Tabla de Usuarios -->
        <v-data-table id="tablaCucha" :headers="encabezado" :items="usuarios">
          <template #[`item.acciones`]="{item}">
            <v-row v-if="item.name !== 'Administrador'">
              <v-btn color="orange" @click="editar(item)">
                Editar
              </v-btn>
              <v-btn color="red" @click="temporal(item._id, item.name)">
                Borrar
              </v-btn>
            </v-row>
          </template>
        </v-data-table>
        <!-- Fin Tabla de Usuarios -->
      </v-card>
    </v-col>
    <v-dialog v-model="dialog" width="400">
      <v-card color="orange">
        <v-card-title>Borrar Usuario</v-card-title>
        <v-card-text>
          ¿Estas seguro que lo quieres borrar?
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" aling="center" @click="borrar(idUsuario)">
            Borrar
          </v-btn>
          <v-btn color="green" @click="dialog = false">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" width="600">
      <v-card color="green ligthen-2">
        <v-card-title>Actualizar Usuario</v-card-title>
        <v-card-text>
          <v-text-field v-model="usuario.name" />
          <v-text-field v-model="usuario.email" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="update">
            Actualizar
          </v-btn>
          <v-btn @click="dialogUpdate = false">
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      idUsuario: null,
      dialogUpdate: false,
      usuario: {},
      usuarios: [],
      encabezado: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        {
          text: 'email',
          align: 'start',
          sortable: false,
          value: 'email'
        },
        {
          text: 'Actions',
          align: 'center',
          sortable: false,
          value: 'acciones'
        }
      ]
    }
  },
  created () {
    this.obtenerUsuarios()
  },
  methods: {
    async obtenerUsuarios () {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
      await this.$axios.get('/user/all',
        { headers }
      ).then((res) => {
        this.usuarios = res.data.data
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    async update () {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
      await this.$axios.post('/user/update',
        this.usuario,
        { headers }
      ).then((res) => {
        this.dialogUpdate = false
        this.usuario = {}
        this.obtenerUsuarios()
      }).catch((error) => {
        this.dialogUpdate = false
        this.usuario = {}
        // eslint-disable-next-line no-console
        console.log('error', error)
      })
    },
    async borrar (id) {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
      const data = { id }
      await this.$axios.post('/user/delete',
        data,
        { headers }
      ).then((res) => {
        if (res.data.message === 'SUCCESS') {
          // alert('BORRADO')
          this.dialog = false
          this.idUsuario = null
          this.obtenerUsuarios()
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
    },
    editar (item) {
      // console.log(item)
      if (item.name !== 'Administrador') {
        this.usuario = item
        this.dialogUpdate = true
      }
    },
    temporal (id, name) {
      if (name !== 'Administrador') {
        this.idUsuario = id
        this.dialog = true
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

#tablaCucha {
  background: #10445A;
}
</style>