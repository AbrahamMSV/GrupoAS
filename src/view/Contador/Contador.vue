<template>
  <div>
    <nav-contador
        v-for="contenido in contenidos"
        v-bind:key="contenido.id"
        v-bind:post="contenido"
    ></nav-contador>
  </div>
</template>

<script>
import navContador from '../../components/NavContador'
export default {
    components: {
        'nav-contador': navContador
    },
    data(){
        return{
            contenidos: [
                {id:1,titulo:'Contador'}
            ]
        }
    },
    beforeCreate: function(){
        if(localStorage.getItem("privilegio") != 2){
                localStorage.removeItem("usuario")
                localStorage.removeItem("privilegio")
                this.$router.push('/login');
            }
    }
}
</script>

<style>

</style>