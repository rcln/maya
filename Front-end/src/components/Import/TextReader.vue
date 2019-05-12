<template>
  <label class="text-reader">
    Read File
    <input type="file" @change="loadTextFromFile">
  </label>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      var output = [];
      reader.onload = function(e) {
        var text = e.target.result;
        var lines = text.split(/[\r\n]+/g);

        for(var i = 0; i < lines.length; i++) {
          lines.forEach(function(line) {

          });
        }
      }
      //reader.readAsText(file);
    }
  }
};
</script>
