<template>
  <div>
    <v-navigation-drawer v-model="drawer" app absolute temporary>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="item.url">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#42A5F5" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-flex d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 300px" class>
        <v-btn class="logo-button" elevation="elevation" height="80" to="/" light>
          <v-img src="../../assets/MedicHub Logo.png" width="120"></v-img>
        </v-btn>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn elevation="elevation" class="transparent-button mr-4 d-none d-md-flex">Register</v-btn>
      <v-btn
        elevation="elevation"
        class="transparent-button mr-4 d-none d-md-flex"
        to="/login"
      >Login</v-btn>

      <span>Welcome</span>
      <v-btn icon large>
        <v-avatar size="32px" item color="yellow">
          <div class="initials">UJ</div>
        </v-avatar>
      </v-btn>
      <v-btn icon class="mr-12">
        <v-icon color="white">mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    elevation: false,
    dialog: false,
    drawer: false,
    items: [
      { icon: "mdi-contacts", text: " Register", url: "/register" },
      { icon: "mdi-history", text: "Login", url: "/login" },
      { icon: "mdi-content-copy", text: "Cart", url: "/cart" },

      { icon: "mdi-cog", text: "Settings", url: "/settings" }
    ]
  })
};
</script>

<style scoped>
.transparent-button,
.logo-button {
  background-color: transparent !important;
}

.v-btn:before {
  background-color: transparent !important;
}
.transparent-button:hover {
  background-color: #01579b !important;
  color: yellow !important;
}
.initials {
  color: #311b92 !important;
}
</style>