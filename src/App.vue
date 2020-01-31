<template>
  <v-app>
    <v-navigation-drawer color="blue" app v-model="drawer">
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="link in links" :key="link.icon" :to="link.route">
            <v-list-item-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-btn icon @click="showNavDrawer()">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>PRACOWNIA PROGRAMOWANIA</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-home", text: "Mieszkania", route: "/mieszkania" },
      { icon: "mdi-account-multiple", text: "Najemcy", route: "/najemcy" },
      { icon: "mdi-magnify", text: "Przeglady", route: "/przeglady" },
      { icon: "mdi-account-switch", text: "Wynajmy", route: "/wynajmy" },
      {
        icon: " mdi-content-paste",
        text: "Ubezpieczenia",
        route: "/ubezpieczenia"
      }
    ]
  }),
  methods: {
    showNavDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
