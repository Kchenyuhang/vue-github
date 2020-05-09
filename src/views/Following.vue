<template>
  <v-row>
    <v-col cols="12" md="3" v-for="(role, index) in followingData" :key="index">
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text align-end" height="200px" :src="role.avatar_url">
          <v-card-title>{{ role.login }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">ID：{{ role.id }}</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>个人首页：{{ role.html_url }}</div>

          <div>Type：{{ role.type }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>
            Share
          </v-btn>

          <v-btn color="orange" text>
            Explore
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Following',
  data() {
    return {
      followingData: []
    }
  },
  components: {},
  created() {
    this.axios.get('https://api.github.com/users/Kchenyuhang/following').then((value) => {
      // let following = value.data
      // for (let i = 0; i < following.length; i++) {
      //   const item = following[i]
      //   this.followingData.splice(1, 0, {
      //     name: item.login,
      //     id: item.id,
      //     avatar_url: item.avatar_url,
      //     html_url: item.html_url,
      //     type: item.type
      //   })
      //   console.log('关注：' + item.login)
      // }
      this.followingData = value.data
      console.log(this.followingData)
    })
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>
<style scoped lang="scss"></style>
