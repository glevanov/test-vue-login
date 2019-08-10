<template>
  <section class="home">
    <form @submit.prevent="handleSubmit">
      <SubHeading
        text="Введите имя пользователя чтобы продолжить"
      />
      <InputGroup
        v-model="username"
        label="Логин"
      />
      <Button
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
