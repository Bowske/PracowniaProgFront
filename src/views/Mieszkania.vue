<template>
  <div class="mieszkania">
    <v-dialog max-width="500px" max-height="600px">
      <template v-slot:activator="{on}">
        <v-btn fixed right bottom fab color="blue" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card align="center">
        <v-card-title class="headline grey lighten-2" primary-title>DODAJ MIESZKANIE</v-card-title>
      </v-card>
      <v-card-text class="grey lighten-2">
        <v-form>
          <v-text-field v-model="typ" label="typ"></v-text-field>
          <v-text-field v-model="wielkosc" label="wielkosc"></v-text-field>
          <v-text-field v-model="rok_budowy" label="rok_budowy"></v-text-field>
          <v-text-field v-model="nr_identyfikujacy" label="nr_identyfikujacy"></v-text-field>
          <v-btn class="blue mx-0 mt-3" @click="axiosPOST">Zatwierdz</v-btn>
        </v-form>
      </v-card-text>
    </v-dialog>
    <v-btn @click="axiosGET">FETCH APARTMENTS</v-btn>
    <v-row>
      <v-col
        color="black"
        cols
        sm="6"
        md="4"
        lg="3"
        v-for="apartment in apartments"
        :key="apartment.nr_identyfikujacy"
      >
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{apartment.nr_identyfikujacy}}</div>
              <v-list-item-title class="headline mb-1">{{ apartment.typ }}</v-list-item-title>
              <v-list-item-subtitle>{{apartment.rok_budowy}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img
                :src="`https://source.unsplash.com/200x200/?house${apartment.nr_identyfikujacy}`"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn @click="axiosDELETE" text>USUN</v-btn>
            <v-btn text>EDYTUJ</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

const API = "http://localhost:8080/api/mieszkania";
const AVATARS = "https://source.unsplash.com/200x200/?house";

export default {
  name: "Mieszkania",
  components: {},
  data() {
    return {
      apartments: [],
      typ: "",
      wielkosc: "",
      nr_identyfikujacy: "",
      id: "",
      rok_budowy: "",
      id_ubezpieczenia: ""
    };
  },
  methods: {
    axiosGET() {
      axios
        .get(`${API}`)
        .then(response => {
          const data = response.data;
          this.apartments = data;
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    axiosPOST() {
      axios
        .post(API, {
          typ: this.typ,
          wielkosc: this.wielkosc,
          nr_identyfikujacy: this.nr_identyfikujacy,
          id: this.id,
          rok_budowy: this.rok_budowy,
          id_ubezpieczenia: this.id_ubezpieczenia
        })
        .then(response => {
          // eslint-disable-next-line no-console
          this.apartments.push({
            typ: response.data.typ,
            wielkosc: response.data.wielkosc,
            nr_identyfikujacy: response.data.nr_identyfikujacy,
            rok_budowy: response.data.rok_budowy
          });
          // eslint-disable-next-line no-console
          console.log(this.apartments);
        });
    },
    avatarGET() {
      axios.get(AVATARS).then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
    },
    axiosDELETE(e) {
      axios.delete(`${API}/${e}`);
    }
  }
};
</script>

<style>
</style>