<template>
  <section class="home">
    <form @submit.prevent="handleSubmit">
      <SubHeading
        class="home__heading"
        text="Введите имя пользователя чтобы продолжить"
      />
      <InputGroup
        v-model="username"
        class="home__input-group"
        label="Логин"
      />
      <Button
        class="home__button"
        label="Далее"
        type="submit"
      />
    </form>
  </section>
</template>

<script>
import InputGroup from '@/components/InputGroup.vue';
import Button from '@/components/Button.vue';
import SubHeading from '@/components/SubHeading.vue';

export default {
  name: 'Home',
  components: {
    InputGroup,
    Button,
    SubHeading,
  },
  data() {
    return {
      username: '',
    };
  },
  methods: {
    handleSubmit() {
      const username = this.username.trim();
      if (username) {
        this.$router.push({ path: `/u/${username}` });
      }
    },
  },
};
</script>

<style scoped>
  @import './Home.css';
</style>
