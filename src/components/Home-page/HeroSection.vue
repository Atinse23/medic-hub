<template>
  <v-card class="mx-12 my-4 pa-10" rounded flat color="white" height="450">
    <v-row>
      <v-col cols="12" md="4">
        <h1>Quality medical supply store</h1>
        <div class="mt-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit illum quisquam laboriosam voluptate ab error ut reiciendis expedita tenetur! Fugiat quae veniam cum dolorem expedita! Obcaecati amet numquam distinctio!</p>
          <v-btn elevation="elevation" class="button pa-6 mt-6">Get Started</v-btn>
          <v-btn elevation="elevation" class="pa-6 mt-6 mx-4" color="#311b92" outlined>Contact Us</v-btn>
        </div>
      </v-col>
      <v-col md="2"></v-col>
      <v-col cols="12" md="6"></v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.button {
  background-color: #311b92 !important;
  color: white !important;
  border: 0.5px solid #311b92;
}
</style>

<script>
export default {
  data() {
    return {
      elevation: false
    };
  }
};
</script>