<template>
    <div>
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="bitacora.asistencia"
      :rules="asistenciaRules"
      label="Asistencia"
      type="number"
      filled
      required
    ></v-text-field>

    <v-text-field
      v-model="bitacora.septima"
      :rules="septimaRules"
      label="Septima"
      type="number"
      required
    ></v-text-field>

    <v-textarea
      clearable
      v-model="bitacora.concepto"
      :rules="conceptoRules"
      label="Concepto"
      filled
      required
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="validate"
      v-on:click="$emit('post-bitacora',bitacora)"
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
    </div>
</template>

<script>
    class Bitacora {
        constructor (asistencia,septima,concepto=''){
            this.asistencia = asistencia;
            this.septima = septima;
            this.concepto = concepto;
        }
    }
    export default {
        data: () => ({
      valid: true,
      bitacora: new Bitacora(),
      asistenciaRules: [
        v => !!v || 'Ingresa asistencia'
      ],
      septimaRules: [
        v => !!v || 'Ingresa septima',
      ],
      conceptoRules: [
        v => !!v || 'Ingresa concepto',
        v => (v && v.length >= 10) || 'Demasiado corto el concepto',
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

<style scoped>

</style>