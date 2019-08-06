<template>
  <div>
    <p>Ошибка: Нет такой комбинации имени пользователя и кода</p>
    <router-link>
      <Button
        label="Вернуться в начало"
      />
    </router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'ErrorMessage',
  components: {
    Button,
  },
};
</script>
