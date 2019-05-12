<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer temporary v-model="sideNav" clipped fixed app>
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
						<v-icon>{{item.icon}}</v-icon>
					</v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="./img/logo.png" width="90px">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
			<v-toolbar-items class="hidden-xs-only">
				<v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
					<v-icon left>{{item.icon}}</v-icon>
					{{item.title}}
				</v-btn>
			</v-toolbar-items>
    </v-toolbar>
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
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in carous" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      <router-view></router-view>
      <v-container fluid fill-width class="black">
        <v-layout justify-center align-center>
          <v-flex shrink>
           
            <p class="dark text-xs-center display-3">Help</p>
            <p class="text-xs-center">The user can import a corpus</p>
            <p class="text-xs-center">The user can add a line by clicking "add"</p>
            <p class="text-xs-center">The user can delete a line by clicking "trash"</p>
            <p class="text-xs-center">The user can correct a line by selecting "to correct"</p>
            <p class="text-xs-center">If the line is correct he must select "Validate"</p>
            <p class="text-xs-center">The user can export the corpus</p>
            <p class="text-xs-center">To save the corpus in the database, all the lines must be validated</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
	data: () =>
		({
			sideNav : false,
      dialog: false,
      menuItems : [
        //{ icon: 'fas fa-user-friends', title: 'Profile', link: '/profil'},
				{ icon: 'lock_open', title: 'Sign in', link: '/'},
				{ icon: 'lock_open', title: 'Interface', link: '/Interface'},
				{ icon: 'lock_open', title: 'Sign up', link: '/SignUp'}
			],
      carous: [
          { src: require('./img/maya.jpg')},
          { src: require('./img/maya5.jpg')},
          { src: require('./img/maya3.jpg')},
          { src: require('./img/maya6.jpeg')}
      ],
      methods: {


      },
      text: "",

    }),
    
  }




</script>
