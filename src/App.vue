<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import navbar from './components/navbar.vue';
import fo from "./components/footer.vue"
const route = useRoute()
</script>

<template>
    <!-- Navbar -->
    <!-- <navbar v-if="route.name !='login'"/> -->
    <navbar v-if="route.name !== 'login'&& route.name !='register'&& route.name !='dashboard' "/>

  <!-- Navbar -->
 

  <RouterView />
  <div>
    <fo  v-if="route.name !='login'&& route.name !='register' && route.name !='dashboard' "/>
  </div>
</template>

<style >
.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);
}
.btn:active,
.btn:focus {
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}
.btn:hover {
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}
</style>
