<template>
  <v-row class="pa-0 mx-0 mt-16">
    <v-col cols="12" md="3" class="d-none d-md-flex"></v-col>
    <v-col cols="12" md="6" class="pa-0">
      <v-card class="py-2 mx-4">
        <v-form @submit.prevent="handleLogin" class="my-16 mx-md-16 mx-4">
          <h3 class="login-title">Welcome back</h3>

          <v-text-field
            label="Email Address"
            name="emailAddress"
            outlined
            color="#42A5F5"
            class="register-input"
          ></v-text-field>

          <v-text-field
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            label="Password"
            name="password"
            outlined
            color="#42A5F5"
            class="register-input"
          ></v-text-field>

          <v-btn color="#42A5F5" outlined>Login</v-btn>
          <v-btn depressed to="/password-reset" light class="forgot-password">Forgot your password?</v-btn>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12" md="3" class="d-none d-md-flex"></v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      loading: false,
      message: ".",
      errorMsg: "",
      value: true
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.onboarding.status.loggedIn;
    }
  },
  methods: {
    handleLogin() {}
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