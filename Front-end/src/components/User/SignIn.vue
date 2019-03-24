<template>
  <v-container fluid fill-width color="white">
    <p>Sign in page</p>
      <form>
      <v-text-field
        v-model="email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="pwd"
        v-validate="'required|pwd'"
        :items="items"
        :error-messages="errors.collect('pwd')"
        label="Password"
        data-vv-name="pwd"
        type="password"
        required
      ></v-text-field>
      <v-btn @click="submit">submit</v-btn>
    </form>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      email: '',
      pwd: '',
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
    }
  }
</script>
