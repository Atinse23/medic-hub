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

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#0D47A1" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-flex d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title style="width: 300px" class>
        <v-btn class="logo-button" elevation="elevation" height="80" to="/" light>
          <v-img src="../../assets/MedicHub Logo.png" width="120"></v-img>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-if="!loggedIn">
        <v-btn
          elevation="elevation"
          class="transparent-button mr-4 d-none d-md-flex"
          to="/register"
        >Register</v-btn>
        <v-btn
          elevation="elevation"
          class="transparent-button mr-4 d-none d-md-flex"
          to="/login"
        >Login</v-btn>
        <v-btn icon class="mr-12" to="/cart">
          <v-icon color="white">mdi-cart</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <span>Welcome</span>

        <div class="initials">{{userName}}</div>
        <v-btn icon to="/cart">
          <v-icon color="white">mdi-cart</v-icon>
        </v-btn>
        <v-btn light elevation="elevation" @click="logout">Logout</v-btn>
      </template>
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
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    userName() {
      return this.$store.state.auth.user.firstname;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logoutUser").then(res => {
        this.$router.push("/");
      });
    }
  }
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
  margin-left: 5px;
}
</style>