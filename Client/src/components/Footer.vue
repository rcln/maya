<template>
	<v-footer app fixed>
    <v-spacer></v-spacer>
      <span>&copy; {{ currentYear() }}</span>
    </v-footer>
</template>

<script>

/**
 * The footer of the application
 */
export default {
  name: "Footer",
  methods: {
    /**
     * Get the current year
     */
    currentYear: () => new Date().getFullYear()
  }
};
</script>
