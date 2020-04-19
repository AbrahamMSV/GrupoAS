<template>
    <div>
    <v-data-table
    :headers="headers"
    :items="bitacoras"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    hide-default-footer
    @page-count="pageCount = $event"
    sort-by="Fecha"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
        
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
  <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
import {bitacoraCollection} from '../../model/firebase';
    export default {
    props: ['bitacoras'],
    data: () => ({
      page: 1,
      pageCount: 0,
      itemsPerPage: 3,
      headers: [
        {
          text: 'Dirigio junta',
          align: 'start',
          sortable: false,
          value: 'EncargadoJunta',
        },
        { text: 'Fecha', value: 'Fecha' },
        { text: 'Asistencia', value: 'Asistencia' },
        { text: 'Concepto', value: 'Concepto' },
        { text: 'Septima', value: 'Septima' },
        { text: 'Opciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
    }),
    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
      },

      deleteItem (item) {
        confirm('¿Esta seguro de eliminar el documento?') && bitacoraCollection.doc(item.id).delete();
        
      },
    },
  }
</script>

<style scoped>

</style>