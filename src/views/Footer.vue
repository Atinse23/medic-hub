<template>
  <v-footer :padless="true">
    <v-card flat width="100%" class="text-center" color="#0D47A1" dark>
      <v-card-text class="white--text">
        Terms and Condition.
        {{ new Date().getFullYear() }} —
        <strong>Medic Hub</strong>
      </v-card-text>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-home</v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-email</v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-calendar</v-icon>
      </v-btn>
      <v-btn class="mx-4 white--text" icon>
        <v-icon size="24px">mdi-delete</v-icon>
      </v-btn>
    </v-card>
  </v-footer>
</template>