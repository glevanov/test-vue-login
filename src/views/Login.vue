<template>
  <section class="login">
    <form @submit.prevent="handleSubmit">
      <SubHeading
        :text="greeting"
      />
      <InputGroup
        v-model="code"
        label="Пароль"
        type="password"
      />
      <Button
        label="Отправить код"
        type="submit"
      />
    </form>
  </section>
</template>

<script>
import axios from 'axios';
import InputGroup from '@/components/InputGroup.vue';
import Button from '@/components/Button.vue';
import SubHeading from '@/components/SubHeading.vue';

export default {
  name: 'Login',
  components: {
    InputGroup,
    Button,
    SubHeading,
  },
  data() {
    return {
      code: '',
      URL: 'http://127.0.0.1:5000/check',
      greeting: `Привет, ${this.$route.params.user}! Введи код для продолжения`,
    };
  },
  methods: {
    handleSubmit() {
      const emptyResponse = '{}';

      axios
        .post(
          this.URL, {
            username: 'bob',
            code: 'marley',
          },
        )
        .then((response) => {
          const { data } = response;
          if (JSON.stringify(data) === emptyResponse) {
            console.log('Error');
          } else {
            this.$router.push({ name: 'dashboard', params: { data } });
          }
        });
    },
  },
};
</script>
