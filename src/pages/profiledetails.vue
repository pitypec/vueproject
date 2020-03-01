<template>
  <v-container grid-list-xs class="d-flex flex-column">
    <v-row no-gutters>
      <v-col md10 cols="10">
        <v-img :src="camera" color="red" max-height="300" fill-width contain class="d-flex">
          <v-row class="d-flex fill-height">
            <v-col class="d-flex flex-row align-end pb-0">
              <v-avatar size="150" color="red" tile>
                <img src="../assets/logo.png" alt="alt" />
              </v-avatar>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
      <v-col cols="12">whatsup you</v-col>
      <v-col>how do you do</v-col>
      <v-col>what do you do</v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "../assets/logo.png";
import camera from "../assets/camera.jpg";
export default {
  name: "profiledetails",
  data() {
    return {
      logo,
      camera
    };
  }
};
</script>

<style></style>
