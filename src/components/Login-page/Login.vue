<template>
  <v-row class="pa-0 mx-0 mt-16">
    <v-col cols="12" md="3" class="d-none d-md-flex"></v-col>
    <v-col cols="12" md="6" class="px-sm-12">
      <v-card class="py-2 mx-md-auto" :loading="loading" width="500">
        <v-form @submit.prevent="handleLogin" class="my-16 mx-md-16 mx-4">
          <h3 class="login-title">Welcome back</h3>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <v-text-field
              label="Email Address"
              name="email"
              outlined
              color="#42A5F5"
              ref="email"
              v-model="email"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>

          <ValidationProvider name="password" rules="required" v-slot="{ errors }">
            <v-text-field
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="()=> (value = !value)"
              :type="value ? 'password' : 'text'"
              label="Password"
              name="password"
              outlined
              color="#42A5F5"
              ref="password"
              v-model="password"
              :error-messages="errors[0]"
            ></v-text-field>
          </ValidationProvider>

          <v-btn color="#42A5F5" outlined @click.prevent="handleLogin">Login</v-btn>
          <v-btn depressed to="/password-reset" light class="forgot-password">Forgot your password?</v-btn>
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
    handleLogin() {
      this.loading = true;
      if (this.email && this.password) {
        this.$store
          .dispatch("auth/loginUser", {
            email: this.email,
            password: this.password
          })
          .then(
            res => {
              this.$router.push("/");
            },
            error => {
              this.loading = false;
              this.email = "";
              this.password = "";
            }
          );
      }
    }
  }
};
</script>

<style scoped>
.forgot-password {
  color: #42a5f5;
  background-color: white !important;

  text-shadow: none;
}
</style>