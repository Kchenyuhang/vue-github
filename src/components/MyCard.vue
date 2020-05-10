<template>
  <v-navigation-drawer class="gradient-bg darken-3" v-model="drawer" style="margin-top: 60px" app clipped width="300">
    <div :style="{ background: color, fontSize: fontSize + 'ps' }" :class="'my-card ' + card_style">
      <img
        src="https://avatars0.githubusercontent.com/u/45170998?v=4"
        style="width: 100px;height: 100px;margin-left: 15px"
      />
      <p style="margin-top: 15px;margin-left: 15px">Kchenyuhang</p>
      <my-button size="default" fontSize="14" color="#aaaaaa" style="margin-left: 15px;margin-top: 15px">
        <!-- <v-icon slot="pre-icon" color="white">mdi-github</v-icon> -->
        <span>Go~</span>
      </my-button>
    </div>
  </v-navigation-drawer>
</template>
<script>
import MyButton from '../components/MyButton'
//判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  console.log('size参数错误')
  return false
}

export default {
  name: 'MyCard',
  props: {
    card_style: {
      validator(value) {
        return oneOf(value, ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'])
      },
      default: 'default'
    },
    color: {
      type: String,
      default: '#fff'
    },
    fontSize: {
      type: String,
      default: '14'
    }
  },
  components: {
    MyButton
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>
<style scoped lang="scss">
[class^='my-card'] {
  //   background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 270px;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
</style>
