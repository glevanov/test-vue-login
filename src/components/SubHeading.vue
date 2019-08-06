<template>
  <h2>{{ text }}</h2>
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
