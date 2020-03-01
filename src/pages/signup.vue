<template>
  <v-form>
    <v-row justify-center xs12 md4 lg4 xl4>
      <v-container style="width: 500px; margin: 200px auto 0 auto; ">
        <v-form ref="form" align="center">
          <v-text-field v-model="username" label="Username" required></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
          ></v-text-field>
          <v-text-field v-model="password" name="input-10-1" label="Password"></v-text-field>
          <v-btn color="success" class="mr-4">Submit</v-btn>
        </v-form>
      </v-container>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "signup"
};
</script>

<style>
</style>