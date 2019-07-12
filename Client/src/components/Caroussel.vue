<template>
	<v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in carous" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      
</template>

<script>

/**
 * The caroussel of the application
 */
export default {
  name: "Caroussel",
  data: () => ({
    carous: [
          { src: require('../img/maya.jpg')},
          { src: require('../img/maya5.jpg')},
          { src: require('../img/maya3.jpg')},
          { src: require('../img/maya6.jpeg')}
      ],
  }),
  
  
};
</script>