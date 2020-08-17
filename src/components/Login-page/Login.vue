<template>
  <v-row class="pt-0">
    <v-col cols="12" md="6">
      <div class="login-coloumn-left mx-auto">
        <v-form @submit.prevent="handleSubmit(handleLogin)">
          <h3 class="login-title">Welcome back</h3>

          <v-text-field
            label="Email Address"
            name="emailAddress"
            outlined
            color="#311b92"
            class="register-input"
          ></v-text-field>

          <v-text-field
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            label="Password"
            name="password"
            outlined
            color="#311b92"
            class="register-input"
          ></v-text-field>

          <v-btn color="#311b92" outlined>Login</v-btn>
          <v-btn depressed to="/password-reset" light class="forgot-password">Forgot your password?</v-btn>
        </v-form>
      </div>
    </v-col>
    <v-col cols="12" md="6" class="d-none d-md-flex login-coloumn">
      <div class="mx-auto">
        <img src="../../assets/Asset 1.svg" width="600px" />
      </div>
    </v-col>
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
  color: #311b92;
  background-color: white !important;
  margin-left: 8rem;
  text-shadow: none;
}
.login-coloumn {
  background-color: #fff0ce;
}
.login-coloumn div img {
  margin-top: 10rem !important;
}
.login-coloumn-left {
  margin-top: 10rem !important;
  width: 30rem !important;
}

.login-title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 50px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  /*margin-bottom: 15px;*/

  color: #311b92;
}

.v-text-field {
  height: 70px !important;
  border-radius: 6px !important;
}
.login-btn {
  margin-top: 20px !important;
}
</style>