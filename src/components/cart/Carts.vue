<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1" hide-default-footer>
    <template v-slot:item.quantity="{ item }">
      <v-text-field
        class="pt-10"
        label="Outlined"
        style="width: 80px;"
        single-line
        outlined
        :value="item.quantity"
        type="number"
      ></v-text-field>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small @click.prevent="deleteItem(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Item",
          align: "start",
          sortable: false,
          value: "item"
        },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Total", value: "total" },
        { text: "", value: "actions" }
      ],
      items: [
        { item: "Scrubs", price: "Frozen Yogurt", quantity: 1, total: 6.0 },
        { item: "Scrubs", price: "Frozen Yogurt", quantity: 2, total: 2.0 },
        { item: "Scrubs", price: "Frozen Yogurt", quantity: 3, total: 6.0 }
      ]
    };
  },
  methods: {
    deleteItem(item) {
      console.log(item);
    }
  }
};
</script>