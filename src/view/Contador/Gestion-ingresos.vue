<template>
  <div>
      <!--NAVEGACION-->
    <nav-contador
        v-for="contenido in contenidos"
        v-bind:key="contenido.id"
        v-bind:post="contenido"
    ></nav-contador>
    <!--FORMULARIO INGRESOS-->
    <form-ingreso
    data-app
    v-on:post-ingreso="sendIngreso"
    ></form-ingreso>
    
    <!--FORMULARIO MOVIMIENTOS-->
    <form-movimiento
    data-app
    v-on:post-movimiento="sendMovimiento"
    ></form-movimiento>
    <panel
    v-for="caja in cajas"
    v-bind:key="caja.Tipo"
    v-bind:caja="caja"
    ></panel>
  </div>
</template>

<script>
import {ingresoCollection} from '../../model/firebase'
import {cajaCollection} from '../../model/firebase'
import {movimientoCollection} from '../../model/firebase'
import {ahorroCollection} from '../../model/firebase'
import navContador from '../../components/NavContador'
import formIngreso from '../../components/Contador/FormAddIngresos'
import formMovimiento from '../../components/Contador/FormAddMovimientos'
import panel from '../../components/Contador/Panel'
export default {
    components: {
        'nav-contador': navContador,
        'form-ingreso': formIngreso,
        'form-movimiento': formMovimiento,
        'panel': panel
    },
    data(){
        return{
            contenidos: [
                {id:1,titulo:'Gestion de ingresos'}
            ],
            ingresos: [],
            cajas:[],
            visible:false
        }
    },
    firestore(){
        return{
            ingresos: ingresoCollection.orderBy('Fecha','asc'),
            cajas: cajaCollection.orderBy('Tipo','asc')
        }
    },
    beforeCreate: function(){
        if(localStorage.getItem("privilegio") != 2){
                localStorage.removeItem("usuario")
                localStorage.removeItem("privilegio")
                this.$router.push('/login');
            }
    },
    methods: {
        sendIngreso: function(post){
            cajaCollection.where('Tipo','==','gasto').get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    var data = doc.data();
                    var total = data.Total;
                    ingresoCollection.add({
                Cantidad: post.cantidad,
                Concepto: post.concepto,
                Fecha: new Date(),
                TipoEntrada: post.tipo,
                QuienRealiza: localStorage.getItem('usuario')
            }).then(function(docRef){
                var currentTotal = post.cantidad + total;
                cajaCollection.doc('Gasto').update({
                    Total: currentTotal
                });
                console.log('ID Documento: ', docRef.id);
            }).catch(function(error){
                console.log('Error: ',error);
            });
                });
            }).catch(function(error){
                console.log("error:", error)
            });
            
        },
        sendMovimiento:function(post){
            if(post.tipo != 99){
            cajaCollection.where('Tipo','==','gasto').get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    var data = doc.data();
                    var total = data.Total;
                    if((total - post.cantidad) < 0){
                        console.log('No hay suficiente liquidez para la transaccion');
                    }else{
                        movimientoCollection.add({
                Cantidad: post.cantidad,
                Concepto: post.concepto,
                Fecha: new Date(),
                TipoEntrada: post.tipo,
                QuienRealiza: localStorage.getItem('usuario')
            }).then(function(docRef){
                var currentTotal = total - post.cantidad;
                cajaCollection.doc('Gasto').update({
                    Total: currentTotal
                });
                console.log('ID Documento: ', docRef.id);
            }).catch(function(error){
                console.log('Error: ',error);
            });
                    }
                });
            }).catch(function(error){
                console.log("error:", error)
            });
            }else if(post.tipo === 99){
                cajaCollection.where('Tipo','==','gasto').get().then(function(querySnapshot){
                    querySnapshot.forEach(function(doc){
                        var dataGasto = doc.data();
                        var totalGasto = dataGasto.Total;
                        cajaCollection.where('Tipo','==','ahorro').get().then(function(querySnapshot){
                            querySnapshot.forEach(function(doc){
                                var dataAhorro = doc.data();
                                var totalAhorro = dataAhorro.Total;
                                if((totalGasto - post.cantidad) < 0){  
                                    console.log("No hay suficiente liquidez para la transaccion")
                                }else if((totalGasto - post.cantidad) <= 0){
                                    ahorroCollection.add({
                                        Cantidad: post.cantidad,
                                        Concepto: post.concepto,
                                        Fecha: new Date(),
                                        TipoEntrada: post.tipo,
                                        QuienRealiza: localStorage.getItem('usuario')
                                    }).then(function(docRef){
                                        var currentGasto = totalGasto - post.cantidad;
                                        var currentAhorro = totalAhorro + post.cantidad;
                                        cajaCollection.doc('Gasto').update({
                                            Total: currentGasto
                                        });
                                        cajaCollection.doc('Ahorro').update({
                                            Total: currentAhorro
                                        });
                                        console.log('ID Documento: ', docRef.id);
                                    }).catch(function(error){
                                        console.log('Error: ',error);
                                    });
                                }   
                            });
                        }).catch(function(error){
                            console.log('Error: ',error);
                        });
                    });
                }).catch(function(error){
                    console.log('Error: ',error);
                })
            }
        }
    }
}
</script>

<style>

</style>