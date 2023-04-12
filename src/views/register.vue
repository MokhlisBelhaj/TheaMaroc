<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card px-5 py-5" id="form1">
          <div class="form-data" v-if="!submitted">
            <div class="forms-inputs mb-4">
              <span>Name</span>
              <input
                autocomplete="off"
                type="text"
                v-model="name"
                class="form-control"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>Email</span>
              <input
                autocomplete="off"
                type="email"
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
            <div class="forms-inputs mb-4">
              <span>Image</span>
              <input
                autocomplete="off"
                type="file"
                ref="imageInput"
                class="form-control"
                @change="onFileChange"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>Description</span>
              <textarea
                v-model="description"
                class="form-control"
                rows="4"
              ></textarea>
            </div>
            <div class="forms-inputs mb-4">
              <span>Phone</span>
              <input
                autocomplete="off"
                type="text"
                v-model="phone"
                class="form-control"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>Addresse</span>
              <input
                autocomplete="off"
                type="text"
                v-model="adresse"
                class="form-control"
              />
            </div>
            <div class="forms-inputs mb-4">
              <span>regions</span>
              
              <select v-model="regions" class="form-control">
         
                <option
                  v-for="region in region"
                  :key="region.id"
                  :value="region.id"
                >
                  {{ region.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <button
                v-on:click.stop.prevent="register"
                class="btn btn-dark w-100"
                :disabled="registerDisabled"
              >
                <span v-if="!registering">Register</span>
                <span v-else
                  ><i class="fa fa-spinner fa-spin"></i> Registering...</span
                >
              </button>
            </div>
          </div>
          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios';
import { onMounted } from 'vue';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      image: null,
      description: '',
      phone: '',
      adresse: '',
      submitted: false,
      error: '',
      registering: false,
      region: [],
      regions:''
    };
  },
  async created() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/allregions");
      this.region = response.data;
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async register() {
      try {
        this.registering = true;

        // Prepare the form data to be sent as a multipart/form-data request
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("image", this.image);
        formData.append("description", this.description);
        formData.append("phone", this.phone);
        formData.append("adresse", this.adresse);
        formData.append("regions", this.regions);

        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Save the access token to local storage
        console.log(response.data.access_token);
        localStorage.setItem("access_token", response.data.access_token);

        // Set the submitted flag to true to show the success message
        this.submitted = true;
        this.$router.push("/login");
      } catch (error) {
        this.error = error.response.data.message;
      } finally {
        this.registering = false;
      }
    },

    onFileChange(event) {
      this.image = event.target.files[0];
    },
  },
};
</script>
