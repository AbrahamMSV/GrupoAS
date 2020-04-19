<template>
<div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Ingresos</th>  
          <th class="text-left">Quien realiza</th>
          <th class="text-left">Cantidad</th>
          <th class="text-left">Concepto</th>
          <th class="text-left">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in ingresos" :key="index">
          <td>{{index + 1}}</td>  
          <td>{{ item.QuienRealiza }}</td>
          <td>{{ item.Cantidad }}</td>
          <td>{{ item.Concepto }}</td> 
          <td>{{ date(item.Fecha) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Liquidez</th>  
          <th class="text-left">Quien realiza</th>
          <th class="text-left">Cantidad</th>
          <th class="text-left">Concepto</th>
          <th class="text-left">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in liquidez" :key="index">
          <td>{{index + 1}}</td>  
          <td>{{ item.QuienRealiza }}</td>
          <td>{{ item.Cantidad }}</td>
          <td>{{ item.Concepto }}</td>
          <td>{{ date(item.Fecha) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Ahorros</th>  
          <th class="text-left">Quien realiza</th>
          <th class="text-left">Cantidad</th>
          <th class="text-left">Concepto</th>
          <th class="text-left">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in ahorros" :key="index">
          <td>{{index + 1}}</td>  
          <td>{{ item.QuienRealiza }}</td>
          <td>{{ item.Cantidad }}</td>
          <td>{{ item.Concepto }}</td>
          <td>{{ date(item.Fecha) }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
export default {
    props:['ingresos','liquidez','ahorros'],
    data: ()=>({
        desserts: [
            {name:'Uno',calories:'2'}
        ]
    }),
    methods: {
        date(time){
            var a = new Date(time * 1000);
  var months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min  ;
  return time;
        }
    }
}
</script>

<style>

</style>