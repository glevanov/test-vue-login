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
        label="Код"
      />
      <Button
        label="Отправить код"
        type="submit"
      />
      <ErrorMessage
        v-if="hasError"
        class="login__error-message"
        :message="errorText"
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
      hasError: false,
      errorText: 'Неверная комбинация имени пользователя и кода',
      code: '',
      URL: 'http://127.0.0.1:5000/check',
      greeting: `Привет, ${this.$route.params.user}! Введи код для продолжения`,
    };
  },
  methods: {
    handleSubmit() {
      const emptyResponse = '{}';
      this.hasError = false;

      if (!this.code.trim()) {
        this.hasError = true;
        this.errorText = 'Код не может быть пустым';
      } else {
        axios
          .post(
            this.URL, {
              username: this.$route.params.user,
              code: this.code.trim(),
            },
          )
          .then((response) => {
            const { data } = response;
            if (JSON.stringify(data) === emptyResponse) {
              this.hasError = true;
              this.errorText = 'Неверная комбинация имени пользователя и пароля';
            } else {
              this.$router.push({ name: 'dashboard', params: { data } });
            }
          })
          .catch((error) => {
            this.hasError = true;
            this.errorText = `${error}`;
          });
      }
    },
  },
};
</script>

<style scoped>
  @import './Login.css';
</style>
