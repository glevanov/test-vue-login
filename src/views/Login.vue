<template>
  <section class="login">
    <form @submit.prevent="handleSubmit">
      <SubHeading
        class="login__heading"
        :text="greeting"
      />
      <InputGroup
        v-model="code"
        class="login__input-group"
        label="Пароль"
        :error="error"
      />
      <Button
        label="Отправить код"
        type="submit"
      />
      <ErrorMessage
        v-if="error"
        class="login__error-message"
        message="Неверная комбинация имени пользователя и пароля"
      />
    </form>
  </section>
</template>

<script>
import axios from 'axios';
import InputGroup from '@/components/InputGroup.vue';
import Button from '@/components/Button.vue';
import SubHeading from '@/components/SubHeading.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'Login',
  components: {
    InputGroup,
    Button,
    SubHeading,
    ErrorMessage,
  },
  data() {
    return {
      error: false,
      code: '',
      URL: 'http://127.0.0.1:5000/check',
      greeting: `Привет, ${this.$route.params.user}! Введи код для продолжения`,
    };
  },
  methods: {
    handleSubmit() {
      const emptyResponse = '{}';
      this.error = false;

      axios
        .post(
          this.URL, {
            username: this.$route.params.user,
            code: this.code,
          },
        )
        .then((response) => {
          const { data } = response;
          if (JSON.stringify(data) === emptyResponse) {
            this.error = true;
          } else {
            this.$router.push({ name: 'dashboard', params: { data } });
          }
        });
    },
  },
};
</script>

<style scoped>
  @import './Login.css';
</style>
