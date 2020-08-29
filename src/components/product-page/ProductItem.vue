<template>
  <div class="row">
    <div class="col-md-5 col-sm-5 col-xs-12">
      <v-carousel>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
      </v-carousel>
    </div>
    <div class="col-md-7 col-sm-7 col-xs-12">
      <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>
      <div class="pl-6">
        <p class="display-1 mb-0">{{product.name}}</p>
        <v-card-actions class="pa-0">
          <p class="headline font-weight-light pt-3">
            {{product.price}}
            <del style class="subtitle-1 font-weight-thin">$80.00</del>
          </p>
          <v-spacer></v-spacer>
          <v-rating
            v-model="rating"
            class
            background-color="warning lighten-3"
            color="warning"
            dense
          ></v-rating>
          <span class="body-2 font-weight-thin">25 REVIEWS</span>
        </v-card-actions>
        <p class="subtitle-1 font-weight-thin">{{product.description}}</p>
        <p class="title">SIZE</p>
        <v-radio-group row>
          <v-radio label="XS" value="XS"></v-radio>
          <v-radio label="S" value="s"></v-radio>
          <v-radio label="M" value="m"></v-radio>
          <v-radio label="L" value="l"></v-radio>
          <v-radio label="XL" value="xl"></v-radio>
        </v-radio-group>
        <p class="title">ITEMS</p>

        <v-text-field outlined style="width:100px" :value="1" dense></v-text-field>
        <v-btn color="#311b92" dark class="pa-6">
          <v-icon>mdi-cart</v-icon>ADD TO CART
        </v-btn>
        <v-btn class="ml-4 pa-6" color="#311b92" outlined @click.prevent="paystackPopup">Check Out</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      rating: 2,
      breadcrums: [
        {
          text: "Home",
          disabled: false,
          href: "/"
        },
        {
          text: "Equipments",
          disabled: true,
          href: "breadcrumbs_shirts"
        }
      ]
    };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    paystackPopup() {
      let handler = PaystackPop.setup({
        key: "pk_test_ca93f9ae5aa8eb81be47ca9e19b0891f87eb8fe8",
        email: "eromcy@ymail.com",
        amount: 200,
        firstname: "Jagaban",
        lastname: "TDolar",
        ref: "" + Math.floor(Math.random() * 1000000000 + 1),

        onClose: function() {
          alert("Window closed.");
        },
        callback: function(response) {
          axios
            .post("https://medic-end.herokuapp.com/verifyPayment", {
              referenceId: response.reference
            })
            .then(response => console.log(response.data));
        }
      });
      handler.openIframe();
    }
  }
};
</script>