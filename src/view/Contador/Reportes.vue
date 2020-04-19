<template>
  <div>
    <!--NAVEGACION-->
    <nav-contador
        v-for="contenido in contenidos"
        v-bind:key="contenido.id"
        v-bind:post="contenido"
    ></nav-contador>
    <!--TABLE MOVIMIENTOS-->
    <table-movimiento
    v-bind:ingresos="ingresos"
    v-bind:liquidez="liquidez"
    v-bind:ahorros="ahorros"
    ></table-movimiento>
  </div>
</template>

<script>
import {ingresoCollection} from '../../model/firebase'
import {movimientoCollection} from '../../model/firebase'
import {ahorroCollection} from '../../model/firebase'
import navContador from '../../components/NavContador'
import tableMovimientos from '../../components/Contador/TableMovimientos'
export default {
    components: {
        'nav-contador': navContador,
        'table-movimiento': tableMovimientos
    },
    data(){
        return{
            contenidos: [
                {id:1,titulo:'Reportes'}
            ],
            ingresos: [],
            liquidez: [],
            ahorros: []
        }
    },
    firestore() {
        return{
            ingresos: ingresoCollection.orderBy('Fecha','desc'),
            liquidez: movimientoCollection.orderBy('Fecha','desc'),
            ahorros:  ahorroCollection.orderBy('Fecha','desc')
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