<template>
  <div class="najemcy">
    <v-dialog max-width="500px" max-height="600px">
      <template v-slot:activator="{on}">
        <v-btn fixed right bottom fab color="blue" v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card align="center">
        <v-card-title class="headline grey lighten-2" primary-title>DODAJ NAJEMCE</v-card-title>
      </v-card>
      <v-card-text class="grey lighten-2">
        <v-form>
          <v-text-field v-model="imie" label="imie"></v-text-field>
          <v-text-field v-model="nazwisko" label="nazwisko"></v-text-field>
          <v-text-field v-model="pesel" label="pesel"></v-text-field>
          <v-text-field v-model="id" label="id"></v-text-field>
          <v-btn class="blue mx-0 mt-3" @click="axiosPOST">Zatwierdz</v-btn>
        </v-form>
      </v-card-text>
    </v-dialog>
    <v-btn @click="axiosGET">FETCH USERS</v-btn>
    <v-row>
      <v-col color="black" cols sm="6" md="4" lg="3" v-for="user in users" :key="user.pesel">
        <v-card class="mx-auto" max-width="344" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{user.pesel}}</div>
              <v-list-item-title class="headline mb-1">{{ user.imie +" "+ user.nazwisko }}</v-list-item-title>
              <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="`https://api.adorable.io/avatars/${user.pesel}`"></v-img>
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

const API = "http://localhost:8080/api/najemcy";
const AVATARS = "https://picsum.photos/200";

export default {
  name: "Najemcy",
  components: {},
  data() {
    return {
      users: [],
      imie: "",
      nazwisko: "",
      pesel: "",
      id: ""
    };
  },
  methods: {
    axiosGET() {
      axios
        .get(`${API}`)
        .then(response => {
          const data = response.data;
          this.users = data;
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    axiosPOST() {
      axios
        .post(API, {
          imie: this.imie,
          nazwisko: this.nazwisko,
          pesel: this.pesel,
          id: this.id
        })
        .then(response => {
          // eslint-disable-next-line no-console
          this.users.push({
            imie: response.data.imie,
            nazwisko: response.data.nazwisko,
            pesel: response.data.pesel,
            id: response.data.id
          });
          // eslint-disable-next-line no-console
          console.log(this.users);
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