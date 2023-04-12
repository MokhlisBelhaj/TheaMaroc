<!-- <template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <div class="form-data" v-if="!submitted">
            <div class="forms-inputs mb-4">
              <span>Email or username</span>
              <input
                autocomplete="off"
                type="text"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>Password</span>
              <input
                autocomplete="off"
                type="password"
                v-model="password"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <button
                v-on:click.stop.prevent="login"
                class="btn btn-dark w-100"
                :disabled="loginDisabled"
              >
                <span v-if="!loggingIn">Login</span>
                <span v-else><i class="fa fa-spinner fa-spin"></i> Logging in...</span>
              </button>
            </div>
          </div>
          <div class="success-data" v-else>
            <div class="text-center d-flex flex-column">
              <i class="bx bxs-badge-check"></i>
              <span class="text-center fs-1"
                >You have been logged in <br />
                Successfully</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <div class="form-data" v-if="!submitted">
            <div class="forms-inputs mb-4">
              <span>Email or username</span>
              <input
                autocomplete="off"
                type="text"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>Password</span>
              <input
                autocomplete="off"
                type="password"
                v-model="password"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <button
                v-on:click.stop.prevent="login"
                class="btn btn-dark w-100"
                :disabled="loginDisabled"
              >
                <span v-if="!loggingIn">Login</span>
                <span v-else><i class="fa fa-spinner fa-spin"></i> Logging in...</span>
              </button>
            </div>
          </div>
          <div class="text-center">
            
          <button class="btn btn-primary mt-3 me-2" v-on:click="$router.push('/')">Home</button>
          <button class="btn btn-primary mt-3" v-on:click="$router.push('/register')">register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      submitted: false,
      error: '',
      loggingIn: false
    };
  },

  methods: {
    async login() {
  try {
    this.loggingIn = true;

    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: this.email,
      password: this.password
    });

    // Save the access token and user details to local storage
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('id', response.data.user.id);
    
    // Check the user role and redirect accordingly
    if (response.data.user.role === 1) {
      localStorage.setItem('role', 'isAdmin');
      this.$router.push('/myaccount');
    } else if (response.data.user.role === 0) {
      localStorage.setItem('role', 'isAssociation');
      this.$router.push('/dashboard');
    } else {
      // Show alert with error message
      alert('Invalid user role');
    }

    // Set the submitted flag to true to show the success message
    this.submitted = true;
  } catch (error) {
    this.error = error.response.data.message;
    // Show alert with error message
    alert(this.error);
  } finally {
    this.loggingIn = false;
  }
}


  }
};
</script>

<style>
.card {
  border: none;
  height: 320px;
}
.forms-inputs {
  position: relative;
}
.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}
.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}
.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}
.btn {
  height: 50px;
}
.success-data {
  display: flex;
  flex-direction: column;
}
.bxs-badge-check {
  font-size: 90px;
}
</style>
