<template>
  <v-app id="inspire" dark>
    <NavBar />
    <v-content>
      <v-container fluid fill-width class="grey darken-4">

          <v-card-text>
            <br/>
            <br/>
            <br/>
            <br/>
            <p class="text-xs-center"><img src="./img/logo.png" width="150px"></p>
            <p class="text-xs-center display-3">YuCorrectMaya</p>
            <p class="text-xs-center">The Yucatec Maya is a Native American language spoken by a minority of Mexicans (734,000 speakers)</p>
            <p class="text-xs-center">This application allows to facilitate the corpus corrections to enrich our database which will be used to make a translator</p>
            <br/>
            <br/>
            <br/>
            <br/>
          </v-card-text>

      </v-container>
      <Caroussel />
      <router-view />
      <Help />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>

import NavBar    from "./components/NavBar.vue";
import Footer    from "./components/Footer.vue";
import Help      from "./components/Help.vue";
import Caroussel from "./components/Caroussel.vue";

export default {
  name: "app",
  components: {
    NavBar,
    Footer,
    Help,
    Caroussel
  }
};




</script>
