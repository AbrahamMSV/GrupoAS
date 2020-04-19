<template>
  <v-card
    class="mx-auto overflow-hidden"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{post.titulo}}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link to="/contador" exact>
                <p>Inicio</p>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/gestion-ingresos" exact>
                <p>Gestion de ingresos</p>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/reportes" exact>
                <p>Reportes</p>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn @click="logOut" >
                <p>Cerrar sesion</p>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    props: ['post'],
    data: function(){
      return {
      
        drawer: false
      }
    },
    methods: {
      logOut(){
        this.$store.commit('logOut')
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>

</style>