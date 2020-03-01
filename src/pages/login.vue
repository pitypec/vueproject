<template>
  <v-row justify-center xs12 md4 lg4 xl4>
    <v-container style="width: 500px; margin: 200px auto 0 auto; ">
      <v-form ref="form" align="center" novalidate>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field
          v-model="password"
          name="input-10-1"
          label="Password"
          type="password"
          hint="At least 8 characters"
        ></v-text-field>
        <v-col class="d-flex flex-row justify-center mb-0 pa-0">
          <v-checkbox label="Remember me" v-model="value" value="value" class="m-15"></v-checkbox>
        </v-col>
        <v-btn color="primary" class="mr-4">Submit</v-btn>
      </v-form>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      value: ""
    };
  }
};
</script>

<style scoped></style>
