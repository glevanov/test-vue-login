<template>
  <p class="error-message">
    <span class="error-message__accent">Ошибка:</span> {{ message }}
  </p>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import '../variables.scss';
  @import './ErrorMessage.scss';
</style>
