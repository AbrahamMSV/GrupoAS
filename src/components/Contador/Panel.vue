<template>
  <v-expansion-panels
      :readonly="false"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>{{caja.Tipo}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{caja.Total}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    props: ['caja'],

}
</script>

<style>

</style>