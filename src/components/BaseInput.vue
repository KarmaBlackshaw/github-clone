<template>
  <div class="form-control form-control__item">
    <input
      type="text"
      v-bind="$attrs"
      class="item-input"
    >

    <!-- <img
      src="https://github.githubassets.com/images/search-key-slash.svg"
      alt=""
    > -->
  </div>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
@import '~styles/components/BaseInput';
</style>
