<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model.number="ingreso.cantidad"
      :rules="cantidadRules"
      label="Cantidad"
      type="number"
      required
    ></v-text-field>

    <v-text-field
      v-model="ingreso.concepto"
      :rules="conceptoRules"
      label="Concepto"
      required
    ></v-text-field>

    <v-row align="center">
    <v-col cols="12">
      <v-select
        v-model="ingreso.tipo"
        :items="entradas"
        item-text="tipo"
        item-value="id"
        label="Tipo de entrada"
      ></v-select>
    </v-col>
  </v-row>

    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="validate"
      v-if="ingreso.cantidad && ingreso.concepto  && ingreso.tipo"
      v-on:click="$emit('post-ingreso',ingreso)"
    >
      Enviar 
    </v-btn>

    <v-btn
      :disabled="true"
      class="mr-4"
      @click="validate"
      v-else
    >
      Enviar 
    </v-btn>

    <v-btn
      class="mr-4"
      @click="reset"
    >
      Vaciar formulario
    </v-btn>

    <v-btn
      @click="resetValidation"
    >
      Reiniciar validaciones
    </v-btn>
  </v-form>
</template>

<script>
class Ingreso{
    constructor(cantidad,concepto="",tipo){
        this.cantidad=cantidad;
        this.concepto=concepto;
        this.tipo=tipo;
    }
}
export default {
    data: () => ({
      valid: true,
      ingreso:new Ingreso(),
      name: '',
      cantidadRules: [
        v => !!v || 'Cantidad es requerido',
      ],
      conceptoRules: [
        v => !!v || 'Concepto es requerido',
        v => (v && v.length > 3) || 'Concepto debe ser mas largo',
      ],
      entradas: [
        {tipo:'Venta libros',id:1},
        {tipo:'Venta tiendita',id:2},
        {tipo:'Venta playeras',id:3},
        {tipo:'Septima',id:4},
        {tipo:'Apoyo experiencia',id:5}
          ],
    }),

    methods: {
      validate () {
        if(this.$refs.form.validate()){

        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
    
<style>

</style>