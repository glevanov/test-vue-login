<template>
  <section class="login">
    <form @submit.prevent="handleSubmit">
      <SubHeading
        :text="greeting"
      />
      <InputGroup
        v-model="code"
        label="Пароль"
      />
      <Button
        label="Отправить код"
        type="submit"
      />
      <template v-if="error">
        <ErrorMessage
          message="Неверная комбинация имени пользователя и пароля"
        />
        <router-link to="/">
          <Button
            label="Вернуться в начало"
          />
        </router-link>
      </template>
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
