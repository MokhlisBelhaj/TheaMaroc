<template>
    <h2 class="text-center">associations</h2>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">image</th>
          <th scope="col">phone</th>
          <th scope="col">adresse</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{user.email }}</td>
          <td><img :src="'src/assets/img/'+user.image" style="width:60px;" ></td>
          <td>{{ user.phone }}</td>
          <td>{{ user.adresse }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2 class="text-center">bibliotheque</h2>
    <table  class="table table-responsive">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">titre</th>
          <th scope="col">image</th>
          <th scope="col">description</th>
          <th scope="col">line</th>
        </tr>
      </thead>
      <tbody>
        <tr>
<th scope='col'>1</th>
<th scope='col'>le guide marocain des associations</th>
<th scope='col'> <img
      src="@/assets/image/guide.jpg"
      alt="Pancake" style="width:60px;"
     /></th>
<th scope='col'>Les associations sont essentielles pour résoudre les problèmes du Maroc et le Guide Marocain des Associations est une ressource précieuse pour les personnes impliquées dans ce travail.
</th>
<th scope='col'>http://www.acodec.org/medias/files/guide-marocain-des-associations.pdf</th>
        </tr>
      </tbody>
    </table>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        axios.post('http://127.0.0.1:8000/api/Users')
          .then(response => {
            this.users = response.data.users;
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
  </script>
  
  