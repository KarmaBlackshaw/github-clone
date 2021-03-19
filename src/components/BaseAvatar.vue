<template>
  <div class="base-avatar">
    <img
      :src="src"
      v-bind="{ ...avatarSize }"
      class="base-avatar__img"
      alt=""
    >
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 30
    },
    src: {
      type: [String],
      default: ''
    }
  },

  computed: {
    avatarSize () {
      return {
        height: this.size + 'px',
        width: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-avatar {
  .base-avatar__img {
    border-radius: 50%;
  }
}
</style>
