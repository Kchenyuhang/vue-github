<template>
  <div>
    <v-btn color="purple" dark @click="gitHub">
      GitHub
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  components: {},
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
