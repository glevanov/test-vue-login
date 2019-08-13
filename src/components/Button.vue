<template>
  <button
    class="button"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang="scss">
  @import '../variables.scss';
  @import './Button.scss';
</style>
