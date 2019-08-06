<template>
  <section class="login">
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
      @click.native="getData"
    />
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
      data: null,
      greeting: `Привет, ${this.$route.params.user}! Введи код для продолжения`,
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
          this.data = response.data;
          console.log(JSON.stringify(this.data));
        });
    },
  },
};
</script>
