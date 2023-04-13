<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="" style="width: 40%" />
      </a>
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
          <router-link to="/" class="text-decoration-none">
            <li class="nav-item text-light me-2">acceuil</li>
          </router-link>
          <router-link to="/bibliotheque" class="text-decoration-none">
            <li class="nav-item text-light me-2">bibliothèque</li>
          </router-link>
          <router-link to="/Contactez-nous" class="text-decoration-none">
            <li class="nav-item text-light me-2">Contactez-nous</li>
          </router-link>
          <router-link to="/about" class="text-decoration-none">
            <li class="nav-item text-light me-2">About-Us</li>
          </router-link>
        </ul>
        <div v-if="loggedIn" class="d-flex">
          <div v-if="admin">
            <router-link to="/dashboard">
              <button class="btn btn-warning me-2">dashboard</button>
            </router-link>
          </div>
          <div v-else>
            <router-link to="/myaccount">
              <button class="btn btn-warning me-2">My Account</button>
            </router-link>
          </div>

          <div><button class="btn btn-danger mx-2" @click="logout">Logout</button></div>
        </div>
        <div v-else>
          <router-link to="/login">
            <button class="btn btn-warning me-2">Login</button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<!-- <script>
import router from '../router';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {

    this.checkLoggedIn();
  },
  methods: {
    checkLoggedIn() {
   
      const token = localStorage.getItem('access_token');
      if (token) {
        this.loggedIn = true;
        const role = localStorage.getItem('role');
        if(role=isAdmin){
          this.admin=true
        }else


      } else {
        this.loggedIn = false;
      }
    },
    logout() {
      localStorage.clear();
      this.checkLoggedIn()
      router.push('/');
    },
  },
};
</script> -->
<script>
import router from "../router";

export default {
  data() {
    return {
      loggedIn: false,
      admin: false,
    };
  },
  created() {
    this.checkLoggedIn();
  },
  methods: {
    checkLoggedIn() {
      const token = localStorage.getItem("access_token");
      if (token) {
        this.loggedIn = true;
        const role = localStorage.getItem("role");
        if (role === "isAdmin") {
          this.admin = true;
        } else {
          this.admin = false;
        }
      } else {
        this.loggedIn = false;
      }
    },
    logout() {
      localStorage.clear();
      this.checkLoggedIn();
      router.push("/");
    },
  },
};
</script>
