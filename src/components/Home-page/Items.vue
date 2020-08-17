<template>
  <v-card class="mx-12 my-4 pa-10" rounded flat>
    <h2>Featured Items</h2>

    <div class="row">
      <div class="col-12 col-md-3 col-sm-6 col-xs-6">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Dissection Kit</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#311b92" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#311b92"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-12 col-md-3 col-sm-6 col-xs-6">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Pocket otoscope</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#311b92" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#311b92"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-12 col-md-3 col-sm-6 col-xs-6">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Medical Tuning Fork</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#311b92" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#311b92"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </div>
      <div class="col-12 col-md-3 col-sm-6 col-xs-6">
        <v-card class="pb-4">
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

          <v-card-text>
            <h3>Consultation White Coat</h3>
            <p>#20,000</p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="#311b92" to="/explore" outlined class="ml-2 px-4">Explore</v-btn>
            <v-hover v-slot:default="{ hover }" open-delay="50">
              <v-btn
                color="#311b92"
                to="/product"
                dark
                :outlined="hover ? true : false"
                class="mx-auto px-4"
              >GET</v-btn>
            </v-hover>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
h3 {
  color: #311b92 !important ;
}
</style>