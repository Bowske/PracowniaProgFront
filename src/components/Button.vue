<template>
  <div class="button">
    <v-dialog v-model="dialog" max-width="500px" max-height="600px">
      <template v-slot:activator="{on}">
        <v-btn fixed right bottom fab color="blue" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card align="center">
        <v-card-title class="headline grey lighten-2" primary-title>{{ myTitle }}</v-card-title>
      </v-card>
      <v-card-text class="grey lighten-2">
        <v-form>
          <v-text-field :label="text1" v-model="area1"></v-text-field>
          <v-text-field :label="text2" v-model="area2"></v-text-field>
          <v-text-field :label="text3" v-model="area3"></v-text-field>
          <v-text-field :label="text4" v-model="area4"></v-text-field>
          <v-btn class="blue mx-0 mt-3" @click="submit">Zatwierdz</v-btn>
        </v-form>
      </v-card-text>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      title: ""
    };
  },
  props: [
    "myTitle",
    "text1",
    "text2",
    "text3",
    "text4",
    "pre1",
    "pre2",
    "pre3",
    "pre4"
  ]
};
</script>

<style>
</style>