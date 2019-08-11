<template>
  <section>
    <SubHeading
      text="Кажется, что-то пошло не так"
    />
    <p>На нашем сайте нет такой страницы</p>
  </section>
</template>

<script>
import SubHeading from '@/components/SubHeading.vue';

export default {
  name: 'NotFound',
  components: {
    SubHeading,
  },
};
</script>
