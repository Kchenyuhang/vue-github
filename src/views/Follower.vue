<template>
  <v-row>
    <v-col cols="12" md="3" v-for="(role, index) in followerData" :key="index">
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
  name: 'Follower',
  data() {
    return {
      followerData: []
    }
  },
  components: {},
  created() {
    this.axios.get('https://api.github.com/users/Kchenyuhang/followers').then((value) => {
      let follower = value.data
      for (let i = 0; i < follower.length; i++) {
        const item = follower[i]
        this.followerData.splice(1, 0, {
          name: item.login,
          id: item.id,
          avatar_url: item.avatar_url,
          html_url: item.html_url,
          type: item.type
        })
        console.log('粉丝：' + item.login)
      }
      console.log(this.followerData)
    })
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>
<style scoped lang="scss"></style>
