<template>
  <v-card class="mb-16 items pa-md-10 pa-0" flat color="#FAFAFA">
    <h2>Featured Items</h2>

    <v-row>
      <v-col cols="12" md="3" v-for="item in products" :key="item.name">
        <Item :item="item" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Item from "./Item";
export default {
  data() {
    return {
      products: [
        {
          name: "Dissection Kit",
          description: "Medical equipment used in performing operations",
          price: "#20,000"
        },
        {
          name: "Pocket otoscope",
          description: "Medical equipment used in performing operations",
          price: "#21,000"
        },
        {
          name: "Consultation White Coat",
          description: "Medical equipment used in performing operations",
          price: "#22,000"
        },
        {
          name: "Medical Turning fork",
          description: "Medical equipment used in performing operations",
          price: "#23,000"
        }
      ]
    };
  },
  components: {
    Item
  }
};
</script>

<style scoped>
h3 {
  color: #0d47a1 !important ;
}
.items {
  position: unset !important;
}
</style>