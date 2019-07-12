<template>
	<!-- Application Menue small window
	<v-navigation-drawer temporary v-model="sideNav" clipped fixed app>
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
			<v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
          <v-list-ile-action>
            <v-icon>lock_open</v-icon>
            <v-list-tile-content>logout</v-list-tile-content>
          </v-list-ile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>-->
     <!-- Application menu large window-->
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="../img/logo.png" width="90px">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
			<v-toolbar-items class="hidden-xs-only" v-if="currentUser">
				<v-btn flat to="/Interface">
					<v-icon left>fas fa-tachometer-alt</v-icon>
					Interface
				</v-btn>
				<v-btn id="logout" flat @click.prevent="logout">
                   <v-icon left>lock_open</v-icon>logout
                </v-btn>
			</v-toolbar-items>
			<v-toolbar-items class="hidden-xs-only" v-else>
				<v-btn id="login" flat >

					<v-icon left>lock</v-icon>Login
				</v-btn>
			</v-toolbar-items>
    </v-toolbar>
</template>

<script>

import { mapGetters } from 'vuex'


/**
 * The Navigation Bar of the application
 */
 export default {
  name: "NavBar",
  sideNav : false,
  dialog: false,
  computed: {
   ...mapGetters({ currentUser: 'currentUser' })
  },
  methods: {
    /**
     *  Logout the username
     */
    logout () {
      this.$store.dispatch("logout")
        .then(() => this.$router.push({ name: "SignIn" }));
    }
  }
}

	
</script>