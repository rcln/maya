<template>
  <v-container fluid fill-width color="white">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="signup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="name"
                      label="Name"
                      id="name"
                      v-model="name"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="fname"
                      label="First Name"
                      id="fname"
                      v-model="fname"
                      type="text"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="ConfirmPassword"
                      label="Confirm Password"
                      id="ConfirmPassword"
                      v-model="ConfirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign up</v-btn>
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
  export default {
    data () {
      return {
        name:'',
        fname:'',
        email:'',
        password:'',
        ConfirmPassword:''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.ConfirmPassword ? 'Passwords do not match' : ''
      }
    },
    methods: {
      onSignup () {
        console.log({email: this.email, password: this.password, ConfirmPassword: this.ConfirmPassword})
      },
      signup () {
        this.$http.post('/register', { name: this.name, fname: this.fname, email: this.email, password: this.password })
        .then(request => this.SignupSuccessful(request))
        .catch(() => this.SignupFailed())

        console.log(localStorage)
      },
      SignupSuccessful(req) {
        console
        if (!req.data.token) {
        this.SignupFailed()
        return
        }
      },
      SignupFailed() {
        this.error = 'Register failed!'
        //this.$store.dispatch('logout')
        delete localStorage.token
      }
    }
  }
</script>
