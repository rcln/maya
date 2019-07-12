<template>
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
</template>

<script>

/**
 * The Help of the application
 */
export default {
  name: "Help",
  
};
</script>
