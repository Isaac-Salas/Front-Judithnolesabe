<template>
  <v-navigation-drawer
    absolute
    permanent
    left
    app
    color="indigo darken-4"
  >
    <template #prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/40.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Isaac Salas</v-list-item-title>
          <v-list-item-subtitle>Loggeau</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider />

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.path" 
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { 
        title: 'Users', 
        icon: 'mdi-account-group-outline',
        path:'/dashboard/users',


        },
        { title: 'My Account', icon: 'mdi-account', path:'/dashboard',},
      ]
    }
  }
}
</script>
