<template>
    <div>
       <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Inicio de sesión</v-toolbar-title>
                <v-spacer />
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuario"
                    name="login"
                    type="text"
                    v-model="user"
                  />

                  <v-text-field
                    label="Contraseña"
                    name="password"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                color="primary"
                @click="login"
                >Iniciar sesión</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
    </div>
</template>

<script>
import {usuarioCollection} from '../model/firebase';
function inputLogin(doc){
            localStorage.setItem('usuario',doc.data().Nombre)
            localStorage.setItem('privilegio',doc.data().Privilegio)
          }
    export default {
        data(){
          return{
            user: '',
            name: '',
            password: '',
            privilegio: 0
          }
        },
        computed:{
          
        },
        methods: {
            login(){
      usuarioCollection.where("Username", "==",this.user).where("Password","==",this.password).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
          inputLogin(doc);
          if(doc.data().Privilegio === "1"){
            this.$router.push('/administrador');
          }else if(doc.data().Privilegio === "2"){
            this.$router.push('/contador');
          }
        })
      });
    this.user = '';
    this.password = '';
    this.name='';
    this.privilegio = 0;
          }
        }
    }
</script>

<style scoped>

</style>