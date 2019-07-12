<template>
  <label class="text-readerSE">
    <input type="file" @change="loadTextFromFile">
  </label>


</template>

<script>
export default {
  methods: {
      loadTextFromFile: function(ev) {
        const file = ev.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) =>{

          //var T = this.Tablines;
          var text = e.target.result;
          var Tablines = [];
          var lineId = 0;

          var Textlines = text.split(/[\r\n]+/g);
          console.log(Textlines);

          for(var i = 0; i < Textlines.length; i++){
            Tablines.push({ id: lineId++, maya: '', espa: Textlines[i], value: 'V' });
          }

          this.$emit("load",Tablines);
          console.log(Tablines);

          //return { TabL: Tablines};

        };
        reader.readAsText(file,"UTF-8");

      },

  }
};
</script>
