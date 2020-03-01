<template>
  <v-card width="400" class="mt-3">
    <v-container>
      <v-avatar size="150" color="red">
        <img src="../assets/logo.png" />
      </v-avatar>
    </v-container>
    <v-container grid-list-xs class="d-flex justify-center">
      <span class="d-block">Adeniyi Okewole</span>
    </v-container>
    <v-container>
      <v-row no-gutters class="d-flex justify-space-around">
        <v-col class="d-flex align-end" width="100">
          <v-btn text color="black" class="d-flex" height="70">
            <p class="flex-grow-1">Followers</p>
            <p class="flex-grow-1">{{ followers }}</p>
          </v-btn>
        </v-col>
        <v-col class="d-flex align-start pl-2" width="100">
          <v-btn text color="black" height="70" class="d-flex">
            <p class="flex-grow-1" full-width>Following</p>
            <p class="flex-grow-1" full-width>{{ following }}</p>
          </v-btn>
        </v-col>
        <v-col class="d-flex align-start pl-2" width="100">
          <v-btn text color="black" height="70">
            <p class="flex-grow-1">posts</p>
            <p class="flex-grow-1">{{ posts }}</p>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      followers: 1100,
      following: 300,
      posts: 150
    };
  }
};
</script>

<style scoped>
.profile-image {
  height: 150px;
  border-radius: "50%";
}
</style>
