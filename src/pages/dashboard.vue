<template>
  <v-container>
    <v-row no-gutters>
      <v-col md10 class="d-flex flex-column align-end">
        <PostForm></PostForm>
        <Post v-for="n in 10" :key="n"></Post>
      </v-col>
      <v-col md1 class="pl-4 d-flex flex-column hidden-sm-and-down">
        <Profile></Profile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from "@/components/Post.vue";
import Profile from "@/components/Profile.vue";
import PostForm from "@/components/PostForm.vue";
export default {
  name: "dashboard",
  components: {
    Post,
    Profile,
    PostForm
  }
};
</script>

<style></style>
