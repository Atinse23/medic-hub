<template>
  <v-card class="pb-4" flat>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-text>
      <h3>{{item.name}}</h3>
      <p>{{item.price}}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="#0D47A1" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
      <v-hover v-slot:default="{ hover }" open-delay="50">
        <v-btn
          class="px-12"
          color="#0D47A1"
          dark
          :outlined="hover ? true : false"
          @click.prevent="loadItem(item)"
        >GET</v-btn>
      </v-hover>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    loadItem(item) {
      if (item) {
        this.$store.dispatch("products/loadItem", this.item);
        localStorage.setItem("item", JSON.stringify(item));
      }
      this.$router.push("/product");
    }
  }
};
</script>