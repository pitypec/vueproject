<template>
  <v-app-bar app color="primary" dark dense fixed height="60px">
    <v-toolbar-title style="margin-left: 40px;" class="headline text-uppercase">VUE APP</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="authenticated" class="justify-space-around pr-10">
      <v-btn depressed color="primary" router to="/profiledetails">
        <v-avatar size="30" color="red">
          <img src="../assets/logo.png" alt="alt" />
        </v-avatar>
        <span class="pl-2">Adeniyi Kolawole</span>
      </v-btn>
      <v-btn small depressed color="primary" router to="/dashboard">
        <v-icon size="20">home</v-icon>
      </v-btn>
      <v-btn small depressed color="primary">
        <v-badge right color="primary" overlap>
          <span slot="badge">10</span>
          <!--slot can be any component-->
          <v-icon size="20">notifications_none</v-icon>
        </v-badge>
      </v-btn>
      <v-btn small depressed color="primary">
        <v-badge right color="primary" overlap>
          <span slot="badge">10</span>
          <!--slot can be any component-->
          <v-icon size="20">inbox</v-icon>
        </v-badge>
      </v-btn>
      <v-btn small depressed color="primary" router to="/settings">
        <v-icon size="20">settings</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      authenticated: true
    };
  }
};
</script>

<style></style>
