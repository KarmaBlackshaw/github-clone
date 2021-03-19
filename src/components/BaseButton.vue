<template>
  <button class="btn">
    <base-icon
      v-if="prependIcon"
      :icon="prependIcon"
      class="btn__icon--prepend"
    />

    <slot></slot>

    <base-icon
      v-if="appendIcon"
      :icon="appendIcon"
      class="btn__icon--append"
    />
  </button>
</template>

<script>
export default {
  props: {
    prependIcon: {
      type: [String],
      default: ''
    },

    appendIcon: {
      type: [String],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: #21262d;
  transition-duration: 0.1s;
  color: $color-btn-primary;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  vertical-align: middle;
  border-radius: 6px;
  user-select: none;
  border: 1px solid #30363d;
  appearance: none;
  padding: 5px 14px;
  font-size: 12px;

  &:hover {
    color: $color-btn-primary;
    border: 1px solid #8b949e;
    background-color: #30363d;
  }

  .btn__icon--prepend {
    margin-right: 2px;
  }

  .btn__icon--append {
    margin-left: 2px;
  }
}
</style>
