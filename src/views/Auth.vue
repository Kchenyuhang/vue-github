<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/home">
          首页
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/follower">
          Follower
        </router-link></el-menu-item
      >
      <el-menu-item index="3">
        <router-link to="/following">
          Following
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/respositry">
          Respositry
        </router-link>
      </el-menu-item>
    </el-menu>
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  name: 'Auth',
  data() {
    return {
      personData: []
    }
  },
  components: {},
  created() {
    this.axios.get('https://api.github.com/users/Kchenyuhang').then((value) => {
      this.personData = value.data
      console.log(this.personData)
    })
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {}
}
</script>
<style scoped lang="scss"></style>
