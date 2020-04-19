<template>
    <div>
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Nombre: {{usuario.Nombre}}</div>
        <v-list-item-title class="headline mb-1">Telefono: {{usuario.Telefono}}</v-list-item-title>
        <v-list-item-subtitle>Sexo: {{usuario.Sexo}}</v-list-item-subtitle>
        <v-list-item-subtitle>Usuario: {{usuario.Username}}</v-list-item-subtitle>
        <v-list-item-subtitle>Privilegio: {{usuario.Privilegio}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn 
      text
      v-on:click="$emit('delete-usuario',usuario)"
      >Eliminar</v-btn>
      <v-btn 
      text
      v-on:click="$emit('edit-usuario',usuario)"
      >Editar</v-btn>
    </v-card-actions>
  </v-card>
    </div>
</template>

<script>
    export default {
        props: ['usuario'],
        data: ()=>({

        }),
        methods: {
          editUser(user){
            console.log(user.id);
          },
          deleteUser(user){
            console.log(user.id);
          }
        }
    }
</script>

<style scoped>

</style>