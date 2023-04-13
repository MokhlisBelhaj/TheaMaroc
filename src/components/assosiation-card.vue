

<script setup>
</script>

<template>
    <div id="viewport">
  <!-- Sidebar -->
  <div id="sidebar">
    <header>
      <a href="#">Dashboard</a>
    </header>
    <ul class="nav col text-center">
      <li class="col-12 mb-4">
        <a href="#">
          assosiation
        </a>
      </li>
      <li class="col-12 mb-4">
        <a href="#">
           Contact
        </a>
      </li>
    </ul>
  </div>
  <!-- Content -->
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
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
    <tr>
      <th scope="row">1</th>
      <td>MOKHLIS BELHAJ</td>
      <td>belhajmokhlis0@gmail.com</td>
      <td><img src="../assets/img/cafe-creme.jpeg" style="width:60px;" alt=""></td>
      <td>0634703188</td>
      <td>N°135 BLOC 4 Qu RIAD</td>
      <td></td>
    </tr>
  </tbody>
    </table>
      </div>
    </nav>
    <div class="container-fluid">
      
    </div>
  </div>
</div>
</template>
<style>

body {

  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

/* Toggle Styles */

#viewport {
  padding-left: 150px;
}

#content {
  width: 100%;
  /* position: relative; */
  /* margin-right: 0; */
}

/* Sidebar Styles */

#sidebar {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 150px;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #37474f;

}

#sidebar header {
  background-color: #263238;
  font-size: 20px;
  line-height: 52px;
  text-align: center;
}

#sidebar header a {
  color: #fff;
  display: block;
  text-decoration: none;
}


#sidebar .nav a {
  background: none;
  border-bottom: 1px solid #455a64;
  color: #cfd8dc;
  font-size: 16px;
  padding: 16px 16px;
}

#sidebar .nav a:hover {
  background: none;
  color: #eceff1;
}

#sidebar .nav a i {
  margin-right: 16px;
}
</style>