<template>
  <v-card max-height="500px" width="400px" class="mb-5">
    <v-container class="d-flex justify-space-between">
      <div>
        <v-avatar size="40" color="red">
          <img src="../assets/logo.png" alt="alt" />
        </v-avatar>
        <p class="d-inline-block">Adeniyi Okewole</p>
      </div>
      <v-btn fab icon small>
        <v-icon small>more_vert</v-icon>
      </v-btn>
    </v-container>
    <v-img src="https://via.placeholder.com/150/92c952" max-height="250px" class="mx-auto"></v-img>
    <v-container grid-list-xs class="pl-0">
      <v-card-title primary-title class="pl-2 pr-0 pt-0 pb-3 subtitle-1">Adeniyi Okewole</v-card-title>
    </v-container>
    <v-card-actions>
      <v-btn fab icon small>
        <v-icon small>insert_comment</v-icon>
      </v-btn>
      <v-btn fab icon small>
        <v-icon small>favorite_border</v-icon>
      </v-btn>
      <v-btn fab icon small>
        <v-icon small>share</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Posts"
};
</script>

<style scoped></style>
