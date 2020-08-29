<template>
  <v-row class="pa-0 mx-0 my-2">
    <v-col cols="12" md="3" class="d-none d-md-flex"></v-col>
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="mx-auto mt-6 pb-12" :loading="loading" width="500">
        <h3 class="login-title text-center">Sign Up with Medic Hub</h3>
        <v-form @submit.prevent="handleLogin" class="my-2 mx-md-16 mx-4">
          <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
            <v-text-field
              label="Firstname"
              placeholder="type in your firstname"
              type="text"
              outlined
              color="#0D47A1"
              ref="email"
              v-model="firstname"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
            <v-text-field
              label="Lastname"
              placeholder="type in your lastname"
              type="test"
              outlined
              color="#0D47A1"
              ref="email"
              v-model="lastname"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="phonenumber" rules="required" v-slot="{ errors }">
            <v-text-field
              label="Phonenumber"
              placeholder="Type in your phonenumber"
              type="digit"
              outlined
              color="#0D47A1"
              ref="email"
              v-model="phonenumber"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <v-text-field
              label="Email Address"
              placeholder="Type in your valid email address"
              type="email"
              outlined
              color="#0D47A1"
              ref="email"
              v-model="email"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="password" rules="required" v-slot="{ errors }">
            <v-text-field
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              label="Password"
              outlined
              color="#0D47A1"
              ref="password"
              v-model="password"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>

          <v-btn color="#0D47A1" outlined @click.prevent="handleRegister">Register</v-btn>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12" md="3" class="d-none d-md-flex"></v-col>
  </v-row>
</template>

<script>
import { ValidationProvider, Field } from "vee-validate";
export default {
  name: "LoginPage",

  data() {
    return {
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      password: "",
      loading: false,
      message: ".",
      errorMsg: "",
      value: true
    };
  },
  components: {
    ValidationProvider
  },
  methods: {
    handleRegister() {
      this.loading = true;
      if (this.email) {
        this.$store
          .dispatch("auth/registerUser", {
            firstname: this.firstname,
            lastname: this.lastname,
            phonenumber: this.phonenumber,
            email: this.email,
            password: this.password
          })
          .then(
            res => {
              this.$router.push("/login");
            },
            error => {
              this.loading = false;
              this.email = "";
              this.password = "";
              this.firstname = "";
              this.lastname = "";
            }
          );
      } else {
        this.loading = false;
        this.email = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
      }
    }
  }
};
</script>

<style scoped>
.forgot-password {
  color: #0d47a1;
  background-color: white !important;

  text-shadow: none;
}
</style>