<template>
  <h2 class="sub-heading">
    {{ text }}
  </h2>
</template>

<script>
export default {
  name: 'SubHeading',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import '../variables.scss';
  @import './SubHeading.scss';
</style>
