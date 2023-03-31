<script setup>
import slides from "../components/slide-home.vue";
import salle from "../components/salle-slide.vue";
import logo from"../components/assosiation-slide.vue"
import affiche from "../components/affiche.vue";

</script>

<template>
  <div>
    <slides />
  </div>
  <div class="container pt-2">
    <div class="row">
      <div class="col-md-6 ">
        <!-- <map/> -->
        <H1>HELLO</H1>
        
      </div>
      <div class="col-md-6">
        <salle />
      </div>
    </div>
  </div>
  <div class="container">
<logo/>
  </div>
  <div class="container">
    <affiche/>
  </div>
 
 

</template>
