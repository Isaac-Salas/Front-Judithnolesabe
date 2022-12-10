<template>
      <v-col style="align-self: center;">
        <Librotes />
      </v-col>
</template>

  <script>
import Librotes from '~/components/dashboard/Librotes.vue'
  export default {
    name: "Index",
    auth: true, //true
    components: { Librotes },
    layout: "DashboardVue"
}
  </script>