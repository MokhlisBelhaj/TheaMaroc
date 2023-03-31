<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/logo.png" alt="" style="width: 40%"
      /></a>
      <button
        class="navbar-toggler bg-warning"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
          <router-link to="/">
            <li class="nav-item text-light">acceuil</li>
          </router-link>
          <router-link to="/bibliothèque">
            <li class="nav-item text-light">bibliothèque</li>
          </router-link>
          <router-link to="/Contactez-nous">
            <li class="nav-item text-light">Contactez-nous</li>
          </router-link>
          <router-link to="/about">
            <li class="nav-item text-light">About-Us</li>
          </router-link>
        </ul>
        <button class="btn btn-warning me-2">login</button>
        <button type="button" class="btn btn-warning btn-rounded">
          Sign up
        </button>
      </div>
    </div>
  </nav>
</template>
