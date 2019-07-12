<template>
  <v-container fluid fill-width color="white">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
                  <form @submit.prevent="login">
                     <div class="alert alert-danger" v-if="error">{{ error }}</div>
                     <v-layout row>
                      <v-flex xs12>
                      
                        <v-text-field
                          v-model="email"
                          type="email"
                          v-validate="'required'"
                          :error-messages="errors.collect('email')"
                          label="E-mail"
                          data-vv-name="email"
                          required
                          autofocus
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-text-field
                          v-model="pwd"
                          v-validate="'required'"
                          :error-messages="errors.collect('pwd')"
                          label="Password"
                          data-vv-validate-on="pwd"
                          data-vv-name="pwd"
                          type="password"
                          required
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-btn type="submit" @click="submit">submit</v-btn>
                      </v-flex>
                  </v-layout>
                  <v-layout>
                    
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
  import { mapGetters } from 'vuex'

  Vue.use(VeeValidate, { events: 'input|pwd' });

  

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      email: '',
      pwd: '',
      error: false,
      dictionary: {
        attributes: {
          email: 'E-mail Address',
          pwd: 'Password'// custom attributes
        },
      }
    }),
    computed: {
    ...mapGetters({ currentUser: 'currentUser' })
  },
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    created () {
    this.checkCurrentLogin()
  },
  updated () {
    this.checkCurrentLogin()
  },
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      checkCurrentLogin () {
      if (this.currentUser) {
        this.$router.replace(this.$route.query.redirect || '/Interface')
      }
    },
    login () {
      this.$http.post('/authenticate', { email: this.email, password: this.pwd })
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
      console.log(localStorage.token)
    },
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      this.error = false
      localStorage.token = req.data.token
      this.$store.dispatch('login')
      this.$router.replace(this.$route.query.redirect || '/Interface')
    },
    loginFailed () {
      this.error = 'Login failed!'
      this.$store.dispatch('logout')
      delete localStorage.token
    }


    }
  }
</script>
