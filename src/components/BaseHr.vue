<template functional>
  <div
    class="main-hr"
    :class="data.staticClass || ''"
    v-bind="data.attrs"
  ></div>
</template>

<style lang="scss" scoped>
.main-hr {
  width: 100%;
  border-top: 1px solid rgba(240, 246, 252, 0.15);
}
</style>
