import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDK7enScLS02NtaZtvlRIAtrwvKb7n16DQ",
    authDomain: "pruebafirebase-17c8d.firebaseapp.com",
    databaseURL: "https://pruebafirebase-17c8d.firebaseio.com",
    projectId: "pruebafirebase-17c8d",
    storageBucket: "pruebafirebase-17c8d.appspot.com",
    messagingSenderId: "113911157832",
    appId: "1:113911157832:web:6913d92b8bd4b94d1d347d",
    measurementId: "G-990GF8CSNJ"
});

export const db = app.firestore();
export const usuarioCollection = db.collection('Usuario');
export const bitacoraCollection = db.collection('Bitacora');
export const ingresoCollection = db.collection('Ingreso');
export const cajaCollection = db.collection('Caja');
export const movimientoCollection = db.collection('MovimientoLiquidez');
export const ahorroCollection = db.collection('MovimientoAhorro');
