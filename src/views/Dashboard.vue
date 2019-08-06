<template>
  <section class="dashboard">
    <SubHeading
      text="Личный кабинет"
    />
    <p>Интернет активен в течение {{ minutes }} минут</p>
    <p>Доступно {{ traffic }} трафика для загрузки</p>
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
    traffic: {
      type: String,
      default: '',
    },
    minutes: {
      type: String,
      default: '',
    },
  },
};
</script>
