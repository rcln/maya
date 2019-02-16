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
        <router-link to="/" tag="span" style="cursor: pointer">YuCorrectMaya</router-link>
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
            <br/>
            <br/>
            <br/>
            <p class="text-xs-center display-3">YuCorrectMaya</p>
            <p class="text-xs-center">The Yucatec Maya is a Native American language spoken by a minority of Mexicans (734,000 speakers)</p>
            <p class="text-xs-center">The Yucatan is a region of Mexico with beautiful scenery.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </v-card-text>

      </v-container>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>

      <v-container fluid fill-width white>
        <v-layout  row>
          <v-flex px-1 my-0 xs3>
            <v-card-text>
              <p class="text-xs-center black--text headline"> Corpus</p>
            </v-card-text>
          </v-flex>
          <v-flex px-1 my-0 xs9>
              <v-card-text>
                <p class="text-xs-center black--text headline">Correction</p>
              </v-card-text>
              <v-container my-0 py-0>
                <v-layout row my-0 py-0>
                  <v-flex px-1 my-0 xs4>
                    <v-card-text>
                      <p class="text-xs-center black--text">Maya</p>
                    </v-card-text>
                  </v-flex>
                  <v-flex px-1 my-0 xs4>
                    <v-card-text>
                      <p class="text-xs-center black--text">Espagnol</p>
                    </v-card-text>
                  </v-flex>
                  <v-flex px-1 my-0 xs4>
                    <v-card-text>
                      <p class="text-xs-center black--text">Validate</p>
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-container id="scroll-target" style="max-height: 400px" class="scroll-y" mt-0>
                <v-layout row v-scroll:#scroll-target="onScroll" style="height: 500px">
                  <v-flex px-1 my-0 xs4>
                    <v-card class="white">
                    <v-card-text>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                      <p class="text-xs-center black--text">Texte Maya</p>
                    </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex px-1 my-0 xs4>
                    <v-card class="white">
                    <v-card-text>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                      <p class="text-xs-center black--text">Texte Espagnol</p>
                    </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex px-1 my-0 xs4>
                    <v-card class="white">
                    <v-card-text>
                      <p>
                      <v-radio-group v-model="radios" row light height="1px">
                        <v-radio value="Correct">
                          <div slot="label" class="dark--text caption">Correct</div>
                        </v-radio>
                        <v-radio value="Validate">
                          <div slot="label" class="dark--text caption">Validate</div>
                        </v-radio>
                        <div slot="label" class="caption">Supprimer</div>
                        <div slot="label" class="caption">Add</div>
                      </v-radio-group>
                    </p>

                      <p class="text-xs-center black--text">c Maya</p>
                      <p class="text-xs-center black--text">c Maya</p>
                      <p class="text-xs-center black--text">c Maya</p>
                      <p class="text-xs-center black--text">c Maya</p>
                      <p class="text-xs-center black--text">c Maya</p>
                      <p class="text-xs-center black--text">c Maya</p>
                      <p class="text-xs-center black--text">c Maya</p>
                    </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
          </v-flex>
        </v-layout>
        <v-btn color="success">Import</v-btn>
        <v-btn color="success">Export</v-btn>
        <v-btn color="success">Save</v-btn>
      </v-container>
      <v-container fluid fill-width class="black">
        <v-layout justify-center align-center>
          <v-flex shrink>
              <p class="dark">Help</p>
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
	data () {
		return {
			sideNav : false,
			menuItems : [
				{ icon: 'fas fa-user-friends', title: 'Help', link: '/help'},
				{ icon: 'fas fa-user-friends', title: 'Profile', link: '/profil'},
				{ icon: 'face', title: 'Sign up', link: '/signup'},
				{ icon: 'lock_open', title: 'Sign in', link: '/signin'}
			],
      items: [
          { src: require('./img/maya.jpg')},
          { src: require('./img/maya5.jpg')},
          { src: require('./img/maya3.jpg')},
          { src: require('./img/maya6.jpeg')}
        ]
		}
	}
}
</script>
