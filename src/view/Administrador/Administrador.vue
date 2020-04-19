<template>
    <div>
        <nav-admin
            v-for="contenido in contenidos"
            v-bind:key="contenido.id"
            v-bind:post="contenido"
        ></nav-admin>
        <h1>Administrador</h1>
    </div>
</template>

<script>
import navAdmin from '../../components/NavAdministrador'
    export default {
        components: {
            'nav-admin': navAdmin
        },
        data(){
            return{
                contenidos: [
                    {id: 1,titulo: "Administrador"}
                ],
                autenticacion: true,
            }
        },
        beforeCreate: function (){
            if(localStorage.getItem("privilegio") != 1){
                localStorage.removeItem("usuario")
                localStorage.removeItem("privilegio")
                this.$router.push('/login');
            }
        }
    }
</script>

<style  scoped>

</style>