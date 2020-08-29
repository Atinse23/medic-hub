<template>
  <v-card class="mx-12 mt-14 pa-2 pa-md-10 hero" rounded flat color="white">
    <v-row>
      <v-col cols="12" md="4">
        <h1>Quality medical supply store</h1>
        <div class="mt-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit illum quisquam laboriosam voluptate ab error ut reiciendis expedita tenetur! Fugiat quae veniam cum dolorem expedita! Obcaecati amet numquam distinctio!</p>
          <v-btn elevation="elevation" class="button pa-6 mt-6">Get Started</v-btn>
          <v-btn elevation="elevation" class="pa-6 mt-6 mx-md-4" color="#0D47A1" outlined>Contact Us</v-btn>
        </div>
      </v-col>
      <v-col md="2"></v-col>
      <v-col cols="12" md="6"></v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.button {
  background-color: #0d47a1 !important;
  color: white !important;
  border: 0.5px solid #0d47a1;
}
.hero {
  position: unset !important;
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