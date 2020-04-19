<template>
    <div>
        <!--NAVEGACION-->
        <nav-admin 
            v-for="contenido in contenidos"
            v-bind:key="contenido.id"
            v-bind:post="contenido"
        ></nav-admin>
        <!--FORMULARIO-->
        <form-add-usuario
        v-on:post-usuario="sendUsuario"
        ></form-add-usuario>
        <!--TARJETA-->
        <card-usuario
        v-for="usuario in usuarios"
        v-bind:key="usuario.Telefono"
        v-bind:usuario="usuario"
        v-on:delete-usuario="deleteUsuario"
        v-on:edit-usuario="editUsuario"
        ></card-usuario>
    </div>
</template>

<script>
import {usuarioCollection} from '../../model/firebase';
import navAdmin from '../../components/NavAdministrador'
import formAdd from '../../components/Administrador/FormAddUsuario'
import cardUser from '../../components/Administrador/CardUsuario'
    export default {
        components: {
            'nav-admin': navAdmin,
            'form-add-usuario': formAdd,
            'card-usuario': cardUser
        },
        data(){
            return{
                contenidos: [
                    {id: 1,titulo: "Agregar usuario"}
                ],
                usuarios: [],
                nombre: ''
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
                usuarios: usuarioCollection.orderBy('Fecha','desc')
            }
        },
        methods: {
            sendUsuario: function(post){
                if(post.nombre === ""&&post.telefono === ""&&post.sexo === ""&&post.username === ""&&post.password === ""&&post.privilegio === ""){
                    console.log("Esta vacio");
                }else{
                    usuarioCollection.add({
                        Fecha: new Date(),
                        Nombre: post.nombre,
                        Password: post.password,
                        Privilegio: post.privilegio,
                        Sexo: post.sexo,
                        Telefono: post.telefono,
                        Username: post.username
                    }).then(function(docRef){
                        console.log('ID Documento: ',docRef.id);
                    }).catch(function(error){
                        console.log('Error:' ,error);
                    });
                }
            },
            deleteUsuario: function(post){
                confirm('¿Esta seguro de eliminar el usuario?') && usuarioCollection.doc(post.id).delete();
            },
            editUsuario: function(post){
                console.log(post.id + "EDIT");
            }
        }
    }
</script>

<style scoped>

</style>