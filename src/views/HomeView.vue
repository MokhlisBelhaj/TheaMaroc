<script setup>
import slides from "../components/slide-home.vue";
import salle from "../components/salle-slide.vue";
import logo from"../components/assosiation-slide.vue"
import affiche from "../components/affiche.vue";
import mapvue from "../components/map.vue";

</script>

<template>
  <div>
    <slides />
  </div>

    <div class="row m-3">
      <div class="col-md-6 border border-5 ">
        <!-- <map/> -->
        <mapvue/>
        
      </div>
      <div class="col-md-6">
        <salle />
      </div>
    </div>
  <div class="container">
<logo/>
  </div>
  <div class="container">
    <affiche/>
  </div>
 
 

</template>
