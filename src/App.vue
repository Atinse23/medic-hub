<template>
  <v-app>
    <div>
      <Layout />
    </div>
    <v-main>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
    <div>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Layout from "./views/Layout";
import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    Layout,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style >
* {
  font-family: "Poppins", sans-serif;
}
</style>
