<template>
  <v-container>
    <my-button size="large" fontSize="20" color="#0288d1" @on-click="gitHub">
      <v-icon slot="pre-icon" color="white">mdi-apple</v-icon>
      <span>GitHub</span>
      <v-icon slot="suffix-icon" color="red">mdi-heart</v-icon>
    </my-button>
  </v-container>
</template>
<script>
import MyButton from '../components/MyButton'
export default {
  name: 'Login',
  data() {
    return {}
  },
  components: {
    MyButton
  },
  created() {},
  mounted() {},
  methods: {
    gitHub() {
      const authorize_uri = 'https://github.com/login/oauth/authorize'
      const client_id = '930f71fdbece9a36b028'
      const redirect_uri = 'http://localhost:8080/login/oauth2/code/github'
      window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`
    }
  },
  computed: {}
}
</script>
<style scoped lang="scss"></style>
