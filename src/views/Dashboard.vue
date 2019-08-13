<template>
  <section class="dashboard">
    <SubHeading
      class="dashboard__heading"
      text="Личный кабинет"
    />
    <p class="dashboard__line">
      Имя пользователя: <span class="dashboard__accent">{{ this.$route.params.user }}</span>
    </p>
    <p class="dashboard__line">
      Интернет активен в течение <span class="dashboard__accent">{{ data.minutes }} минут</span>
    </p>
    <p class="dashboard__line">
      Доступно <span class="dashboard__accent">{{ data.traffic }} мб</span> трафика для загрузки
    </p>
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

<style lang="scss">
  @import '../variables.scss';
  @import './Dashboard.scss';
</style>
