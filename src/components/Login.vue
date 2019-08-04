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
    <button type="button">
      Запрос
    </button>
    <p>{{ login }}, {{ password }}</p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
    };
  },
};
</script>
