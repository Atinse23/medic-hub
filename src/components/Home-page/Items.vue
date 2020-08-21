<template>
  <v-card class="mx-12 mb-16 items px-md-10 pa-0" rounded flat>
    <h2>Featured Items</h2>

    <v-row>
      <v-col cols="12" md="3">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Dissection Kit</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#42A5F5" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#42A5F5"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Pocket otoscope</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#42A5F5" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#42A5F5"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Medical Tuning Fork</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#42A5F5" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#42A5F5"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Consultation White Coat</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#42A5F5" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#42A5F5"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto px-4"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
h3 {
  color: #42a5f5 !important ;
}
.items {
  position: unset !important;
}
</style>