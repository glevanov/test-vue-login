<template>
  <div>
    <p>Привет, %username%! Введи код для продолжения</p>
    <label>
      Логин
      <input
        v-model="login"
        type="text"
      >
    </label>
    <label>
      Пароль
      <input
        v-model="password"
        type="password"
      >
    </label>
    <button
      type="button"
      @click="getData"
    >
      Запрос
    </button>
    <p>Логин: {{ login }}, Пароль:{{ password }}</p>
    <p>Ответ:<br>{{ response }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      URL: 'http://127.0.0.1:5000/check',
      response: null,
    };
  },
  methods: {
    getData() {
      axios
        .post(
          this.URL, {
            username: 'bob',
            code: 'marley',
          },
        )
        .then((response) => {
          this.response = response.data;
        });
    },
  },
};
</script>
