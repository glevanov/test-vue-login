<template>
  <label class="input-group">
    <span class="input-group__label">{{ label }}</span>
    <input
      class="input-group__input"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'InputGroup',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
  @import '../variables.scss';
  @import './InputGroup.scss';
</style>
