<template>
  <v-app id="inspire">
    <Drawer />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '~/components/dashboard/Drawer.vue'
export default {
  components: {
    Drawer
  }
}
</script>
