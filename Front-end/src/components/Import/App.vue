<template>
	<div id="app">
    <textarea rows="10" v-model="text"></textarea>
    <br>
		<text-reader @load="text = $event"></text-reader>
	</div>
</template>

<script>
import TextReader from "./TextReader";

export default {
  name: "app",
  data: () => ({ text: "" }),
  components: {
    TextReader
  }
};
</script>
