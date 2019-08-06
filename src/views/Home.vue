<template>
  <section class="home">
    <SubHeading
      :text="greeting"
    />
    <InputGroup
      v-model="username"
      label="Логин"
    />
    <router-link :to="'/u/' + username">
      <Button
        label="Далее"
        type="submit"
      />
    </router-link>
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
      greeting: 'Введите имя пользователя чтобы продолжить',
    };
  },
};
</script>
