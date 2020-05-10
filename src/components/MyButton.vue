<template>
  <button
    :style="{ backgroundColor: color, fontSize: fontSize + 'px' }"
    :class="'my-btn ' + size"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="pre-icon"></slot>
    <slot></slot>
    <slot name="suffix-icon"></slot>
  </button>
</template>
<script>
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
  name: 'MyButton',
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#b3e5fc'
    },
    fontSize: {
      type: String,
      default: '14'
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    handleClick(event) {
      this.$emit('on-click', event)
    }
  },
  computed: {}
}
</script>
<style scoped type="scss">
[class^='my-btn'] {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
}
.small {
  width: 80px;
  height: 30px;
}
.default {
  width: 120px;
  height: 40px;
}
.large {
  width: 200px;
  height: 60px;
}
</style>
