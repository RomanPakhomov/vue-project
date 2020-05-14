<template lang="pug">
  .component-wrap
    slider
    best-sellers
    categories-cards
</template>

<script>
import Slider from '../components/shared/Slider.vue';
import BestSellers from '../components/catalog/BestSellers.vue';
import CategoriesCards from '../components/catalog/CategoriesCards.vue';

export default {
  name: 'main-page',
  layout: 'main',
  data: () => ({
    title: 'main page',
    footerText: 'Натурально...   Качественно...   Исключительно...',
    footerImage: '16264200.jpg',
    publicPath: `${process.env.BASE_URL}`,
  }),
  components: {
    slider: Slider,
    'best-sellers': BestSellers,
    'categories-cards': CategoriesCards,
  },
};
</script>

<style lang="scss" scoped>

</style>
