<template>
    <div>
        <!--NAVEGACIÓN-->
        <nav-admin 
            v-for="contenido in contenidos"
            v-bind:key="contenido.id"
            v-bind:post="contenido"
        ></nav-admin>
        <!--FORMULARIO DE BITACORA-->
        <form-bitacora
        v-on:post-bitacora="addBitacora"
        ></form-bitacora>
        <!--TABLA DE BITACORA-->
        <table-bitacora
        v-bind:bitacoras="bitacoras"
        ></table-bitacora>
    </div>
</template>

<script>
import {bitacoraCollection} from '../../model/firebase';
import navAdmin from '../../components/NavAdministrador'
import formBitacora from '../../components/Administrador/FormBitacora'
import tableBitacora from '../../components/Administrador/TableBitacora'

    export default {
        components: {
            'nav-admin': navAdmin,
            'form-bitacora': formBitacora,
            'table-bitacora': tableBitacora
        },
        data(){
            return{
                contenidos: [
                    {id: 1,titulo: "Bitacora de juntas"}
                ],
                bitacoras: [],
            }
        },
        beforeCreate: function (){
            if(localStorage.getItem("privilegio") != 1){
                localStorage.removeItem("usuario")
                localStorage.removeItem("privilegio")
                this.$router.push('/login');
            }
        },
        firestore(){
            return{
                bitacoras: bitacoraCollection.orderBy('Fecha', 'desc')
            }
        },
        methods: {
            addBitacora: function(post){
                if(post.asistencia != undefined && post.septima != undefined && post.concepto != undefined){
                    bitacoraCollection.add({
                    Asistencia: post.asistencia,
                    Concepto: post.concepto,
                    EncargadoJunta: localStorage.getItem('usuario'),
                    Fecha: new Date(),
                    Septima: post.septima,
                }).then(function(docRef){
                    console.log("El documento se escribio con el ID: ",docRef.id);
                }).catch(function(error){
                    console.log("error añadiendo el documento: ",error);
                });
                }else{
                    console.log("No se pudo enviar");
                }
            },
        }
    }
</script>

<style scoped>

</style>