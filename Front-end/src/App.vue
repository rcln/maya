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

      <v-container fluid fill-width white>
        <v-treeview v-model="tree" :open="open" :items="items" activatable item-key="name" open-on-click light>
          <template slot="prepend" slot-scope="{ item, open }">
            <v-icon v-if="!item.file">
              {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
            </v-icon>
            <v-icon v-else>
              {{ files[item.file] }}
            </v-icon>
          </template>
        </v-treeview>
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
          <v-layout row  style="height: 500px">
            <v-flex px-1 my-0 xs4>
              <v-card class="white">
              <v-card-text>
                <p v-show="ligne1 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne1 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne2 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne2 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne3 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne3 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne4 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne4 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne5 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne5 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne6 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne6 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne7 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne7 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne8 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ maya }}</p>
                <v-text-field v-model="maya" v-show="ligne8 == 'C'" label="Solo" solo ></v-text-field>
              </v-card-text>
              </v-card>
            </v-flex>
            <v-flex px-1 my-0 xs4>
              <v-card class="white">
              <v-card-text>
                <p v-show="ligne1 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne1 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne2 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne2 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne3 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne3 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne4 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne4 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne5 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne5 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne6 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne6 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne7 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne7 == 'C'" label="Solo" solo ></v-text-field>
                <p v-show="ligne8 == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ espa }}</p>
                <v-text-field v-model="espa" v-show="ligne8 == 'C'" label="Solo" solo ></v-text-field>
              </v-card-text>
              </v-card>
            </v-flex>
            <v-flex px-1 my-0 xs4>
              <v-card class="white">
              <v-card-text>
                <v-radio-group v-model="ligne1" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                  <p>
                    <v-btn icon small >
                      <v-icon >fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon  small >
                      <v-icon >far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>
                <v-radio-group v-model="ligne2" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>
                <v-radio-group v-model="ligne3" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                   <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>

                <v-radio-group v-model="ligne4" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                   <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>

                <v-radio-group v-model="ligne5" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                   <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>

                <v-radio-group v-model="ligne6" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                   <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>

                <v-radio-group v-model="ligne7" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                   <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>

                <v-radio-group v-model="ligne8" row light height="0px">
                  <p>
                    <v-radio value="V" color="green">
                      <div slot="label" class="black--text">Validate</div>
                    </v-radio>
                  </p>
                  <p>
                  <v-radio value="C" color="green">
                    <div slot="label" class="black--text">To correct</div>
                  </v-radio>
                  </p>
                   <p>
                    <v-btn icon small>
                      <v-icon>fas fa-plus</v-icon>
                    </v-btn>
                  </p>
                  <p>
                    <v-btn icon small>
                      <v-icon>far fa-trash-alt</v-icon>
                    </v-btn>
                  </p>
                </v-radio-group>


              </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-layout>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-btn slot="activator" color="success" dark>Import</v-btn>
            <v-card>
              <v-card-title class="headline">Import file</v-card-title>
              <v-card-text>
                <p>Type of corpus :</p>
                <v-radio-group v-model="file" :mandatory="false">
                  <v-radio label="Parallel corpus" value="P" color="green"></v-radio>
                  <v-radio label="Simple corpus" value="S" color="green"></v-radio>
                </v-radio-group>
                <p v-show="file == 'P'">Corpus maya</p>
                <p v-show="file == 'P'">Corpus espagnol</p>
                <p v-show="file == 'S'">Language :</p>
                <v-radio-group v-show="file == 'S'" v-model="langue" :mandatory="false">
                  <v-radio label="Espagnol" value="E" color="green"></v-radio>
                  <v-radio label="Maya" value="M" color="green"></v-radio>
                </v-radio-group>
                <p v-show="langue == 'M' && file == S">Corpus maya</p>
                <p v-show="langue == 'E' && file == S">Corpus espagnol</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false">Import</v-btn>
                <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn color="success">Export</v-btn>
          <v-btn color="success">Save</v-btn>
        </v-layout>
      </v-container>
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
	data () {
		return {
			sideNav : false,
      dialog: false,
			menuItems : [
        { icon: 'fas fa-user-friends', title: 'Profile', link: '/profil'},
				{ icon: 'lock_open', title: 'Sign in', link: '/signin'}
			],
      carous: [
          { src: require('./img/maya.jpg')},
          { src: require('./img/maya5.jpg')},
          { src: require('./img/maya3.jpg')},
          { src: require('./img/maya6.jpeg')}
      ],
      open: ['Corpus'],
      files: {
        txt: 'mdi-file-document-outline',
      },
      tree: [],
      items: [{
          name: 'Corpus',
          children: [{
              name: 'Corpus Name',
              children: [{
                name: 'corpus Maya',
                file: 'txt'
              },
              {
                name: 'corpus Espagnol',
                file: 'txt'
              }]
            }]
        }],
        file : 'P',
        langue : 'E',
        ligne1: 'V',
        ligne2: 'V',
        ligne3: 'V',
        ligne4: 'V',
        ligne5: 'V',
        ligne6: 'V',
        ligne7: 'V',
        ligne8: 'V',
        maya: 'Maya',
        espa: 'Espagnol',


    }
  }
}


</script>
