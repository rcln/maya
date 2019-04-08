<template>
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
            <p class="text-xs-center black--text">Spanish</p>
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
      <v-layout row  style="height: 100px" v-for="t in text" v-bind:key="t.id">
        <v-flex px-1 my-0 xs4>
          <v-card class="white">
          <v-card-text>
            <p v-show="t.value == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ t.maya }}</p>
            <v-text-field v-model="t.maya" v-show="t.value == 'C'" label="Maya" solo placeholder="Maya"></v-text-field>
          </v-card-text>
          </v-card>
        </v-flex>
        <v-flex px-1 my-0 xs4>
          <v-card class="white">
          <v-card-text>
            <p v-show="t.value == 'V'" class="text-xs-center black--text" style="font-size:17px;height:28px;">{{ t.espa }}</p>
            <v-text-field v-model="t.espa" v-show="t.value == 'C'" label="Spanish" solo placeholder="Spanish"></v-text-field>
          </v-card-text>
          </v-card>
        </v-flex>
        <v-flex px-1 my-0 xs4>
          <v-card class="white">
          <v-card-text>
            <v-radio-group v-model="t.value" row light height="0px">
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
                <v-btn icon small v-on:click="addLine">
                  <v-icon >fas fa-plus</v-icon>
                </v-btn>
              </p>
              <p>
                <v-btn icon  small v-on:click="text.splice(index,1)" >
                  <v-icon >far fa-trash-alt</v-icon>
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
            <v-radio-group v-model="f" :mandatory="false">
              <v-radio label="Parallel corpus" value="P" color="green"></v-radio>
              <v-radio label="Simple corpus" value="S" color="green"></v-radio>
            </v-radio-group>
            <p v-show="f == 'P'">
              <label>Corpus maya
                <input type="file" id="filePM" ref="file" v-on:change="handleFileUpload()"/>
              </label>
              <label>Corpus espagnol
                <input type="file" id="filePE" ref="file" v-on:change="handleFileUpload()"/>
              </label>
            </p>
            <p v-show="f == 'S'">Language :</p>
            <v-radio-group v-show="f == 'S'" v-model="langue" :mandatory="false">
              <v-radio label="Espagnol" value="E" color="green"></v-radio>
              <v-radio label="Maya" value="M" color="green"></v-radio>
            </v-radio-group>
            <p v-show="langue == 'M' && f == 'S'">
              <label>Corpus maya
                 <text-reader @load="text = $event"></text-reader>
              </label>
            </p>
            <p v-show="langue == 'E' && f == 'S'">
              <label>Corpus espagnol
                 <text-reader @load="text = $event"></text-reader>
              </label>
            </p>
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
</template>

<script>
import TextReader from "../../TextReader";
export default {
	data: () => ({
      dialog: false,
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
            name: 'corpus Spanish',
            file: 'txt'
          }]
        }]
      }],
      f : 'P',
      langue : 'E',
      lines: [
        {id:'1', maya:'Maya',espa:'Spanish', value: 'V'},
        {id:'2', maya:'Maya',espa:'Spanish', value: 'V'},
        {id:'3', maya:'Maya',espa:'Spanish', value: 'V'},
        {id:'4', maya:'Maya',espa:'Spanish', value: 'V'},
        {id:'5', maya:'Maya',espa:'Spanish', value: 'V'},
        {id:'6', maya:'Maya',espa:'Spanish', value: 'V'},
        {id:'7', maya:'Maya',espa:'Spanish', value: 'V'}
      ],
      linetextM: '',
      linetextE: '',
      lineid: 8,
      loadTextFromFile : '',
      file: '',
      text: '',

  }),
  methods: {
    addLine: function() {

      this.lines.push({id: this.lineid++, maya: this.linetextM, espa: this.linetextE, value: 'V' });

    }
  },
  components: {
    TextReader
  }

}



</script>
