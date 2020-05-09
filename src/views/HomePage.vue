<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="red">mdi-heart</v-icon>
                </v-list-item-icon>
                <v-list-item-title> html_url:{{ user.html_url }} </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="orange">mdi-bell</v-icon>
                </v-list-item-icon>
                <v-list-item-title> id:{{ user.id }} </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="cyan">mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title> name:{{ user.name }} </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="cyan">mdi-heart</v-icon>
                </v-list-item-icon>
                <v-list-item-title> followers:{{ user.followers }} </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="cyan">mdi-heart</v-icon>
                </v-list-item-icon>
                <v-list-item-title> following:{{ user.following }} </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="cyan">mdi-heart</v-icon>
                </v-list-item-icon>
                <v-list-item-title> public_repos:{{ user.public_repos }} </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="cyan">mdi-heart</v-icon>
                </v-list-item-icon>
                <v-list-item-title> public_repos:{{ user.public_repos }} </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title>
                <v-img :src="user.avatar_url"></v-img>
              </v-card-title>
              <v-card-text>
                <p>{{ user.name }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      user: null
    }
  },
  components: {},
  created() {
    console.log('回调')
    var user = this.$route.query.user
    if (user) {
      console.log(user)
      this.user = JSON.parse(user)
      localStorage.setItem('token', this.user.id)
      localStorage.setItem('user', user)
    }
  },
  mounted() {},
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  },
  computed: {}
}
</script>
<style scoped lang="scss"></style>
