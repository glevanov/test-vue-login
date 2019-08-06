<template>
  <label>
    {{ label }}
    <input
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
