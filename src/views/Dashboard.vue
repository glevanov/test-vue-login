<template>
  <section class="dashboard">
    <SubHeading
      text="Личный кабинет"
    />
    <p>Имя пользователя: {{ this.$route.params.user }}</p>
    <p>Интернет активен в течение {{ data.minutes }} минут</p>
    <p>Доступно {{ data.traffic }} трафика для загрузки</p>
  </section>
</template>

<script>
import SubHeading from '@/components/SubHeading.vue';

export default {
  name: 'Dashboard',
  components: {
    SubHeading,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
