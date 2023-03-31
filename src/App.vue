<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue';
import fo from "./components/footer.vue"
</script>

<template>
    <!-- Navbar -->
    <navbar/>
  <!-- Navbar -->
 

  <RouterView />
  <div>
    <fo/>
  </div>
</template>

<style >
</style>
