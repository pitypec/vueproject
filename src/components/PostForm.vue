<template>
  <v-card width="400px" class="mb-5 mt-3">
    <v-container grid-list-xs class="pb-0">
      <v-form>
        <v-textarea row="3" placeholder="what is on your mind" filled auto-grow row-height="15"></v-textarea>
      </v-form>
    </v-container>
    <template>
      <v-card-actions class="mt-0 pt-0 d-flex flex-row justify-space-between">
        <v-btn icon size="30" color="primary">
          <v-icon>camera</v-icon>
        </v-btn>
        <v-btn icon size="30" color="primary">
          <v-icon>public</v-icon>
        </v-btn>
        <v-btn icon size="35" color="primary" class="justify-end">
          <v-icon>send</v-icon>
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "PostForm"
};
</script>

<style></style>
