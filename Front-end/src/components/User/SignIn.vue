<template>
  <v-container fluid fill-width color="white">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
                  <form>
                     <v-layout row>
                      <v-flex xs12>
                      
                        <v-text-field
                          v-model="email"
                          v-validate="'required|email'"
                          :error-messages="errors.collect('email')"
                          label="E-mail"
                          data-vv-name="email"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          v-model="pwd"
                          v-validate="'required|pwd'"
                          :error-messages="errors.collect('pwd')"
                          label="Password"
                          data-vv-name="pwd"
                          type="password"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn @click="submit">submit</v-btn>
                      </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
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
