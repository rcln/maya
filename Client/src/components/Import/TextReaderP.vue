<template>
  <label class="text-readerP">
    Corpus maya
    <input type="file" @change="loadTextFromFileM">
    Corpus espagnol
    <input type="file" @change="loadTextFromFileE">
  </label>


</template>

<script>
export default {
  data: () => ({
    Tablines: []
  }),
  methods: {

    loadTextFromFileM: function(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) =>{

        //var T = this.Tablines;
        var text = e.target.result;
        //var Tablines = [];
        var lineId = 0;

        var Textlines = text.split(/[\r\n]+/g);
        console.log(Textlines);

        for(var i = 0; i < Textlines.length; i++){
          this.Tablines.push({ id: lineId++ , espa : '',  maya : Textlines[i], value: 'V' });
        }

        this.$emit("load",this.Tablines);
        console.log(this.Tablines);

        //return { TabL: Tablines};

      };
      reader.readAsText(file,"UTF-8");

    },


      loadTextFromFileE: function(ev) {
        const file = ev.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) =>{

          //var T = this.Tablines;
          var text = e.target.result;
        //  var Tablines = [];
          //var lineId = 0;

          var Textlines = text.split(/[\r\n]+/g);
          console.log(Textlines);

          for(var i = 0; i < Textlines.length; i++){
            this.Tablines[i].espa = Textlines[i];
          }

          this.$emit("load",this.Tablines);
          console.log(this.Tablines);

          //return { TabL: Tablines};

        };
        reader.readAsText(file,"UTF-8");

      },
  }
};
</script>
