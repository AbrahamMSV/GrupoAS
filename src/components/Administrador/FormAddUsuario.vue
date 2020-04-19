<template>
    <div>
<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="usuario.nombre"
      :counter="0"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="usuario.telefono"
      :counter="10"
      :rules="telefonoRules"
      label="Telefono"
      required
    ></v-text-field>

    <v-text-field
      v-model="usuario.username"
      :counter="0"
      :rules="usuarioRules"
      label="Usuario"
      required
    ></v-text-field>

    <v-text-field
      v-model="usuario.password"
      :counter="0"
      :rules="passwordRules"
      label="Contraseña"
      required
    ></v-text-field>

    <v-radio-group v-model="usuario.sexo" :mandatory="false">
      <v-radio label="Hombre" value="1"></v-radio>
      <v-radio label="Mujer" value="2"></v-radio>
    </v-radio-group>
    <hr>
    <v-radio-group v-model="usuario.privilegio" :mandatory="false">
      <v-radio label="Administrador" value="1"></v-radio>
      <v-radio label="Contador" value="2"></v-radio>
      <v-radio label="Miembro" value="3"></v-radio>
    </v-radio-group>
    <hr>
    <v-btn
      :disabled="!valid"
      class="mr-4"
      @click="validate"
      v-on:click="$emit('post-usuario',usuario)"
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
      Reinciar validaciones
    </v-btn>
</v-form>
    </div>
</template>

<script>
class Usuario {
        constructor (nombre = '',telefono = '',sexo = '',username = '',password = '',privilegio = ''){
            this.nombre = nombre;
            this.telefono = telefono;
            this.sexo = sexo;
            this.username = username;
            this.password = password;
            this.privilegio = privilegio;
        }
    }
    export default {
        data: () => ({
      valid: true,
      usuario: new Usuario(),
      nameRules: [
        v => !!v || 'Se requiere nombre',
        v => (v && v.length >= 3) || 'Nombre debe tener minimo 3 letras',
      ],
      telefonoRules: [
        v => !!v || 'Se requiere telefono',
        v => (v && v.length <= 10) || 'Telefono debe tener minimo 10 digitos',
      ],
      usuarioRules: [
        v => !!v || 'Se requiere usuario',
        v => (v && v.length >= 3) || 'Usuario debe tener minimo 3 letras',
      ],
      passwordRules: [
        v => !!v || 'Se requiere contraseña',
        v => (v && v.length >= 6) || 'Contraseña debe tener minimo 6 letras',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      privilegio: [],
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