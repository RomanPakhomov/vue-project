<template lang="pug">
  .component-wrap
    .container
      .row
        .col-md-3.col-lg-3
          category-list
        .col-md-9.col-lg-9
          h1.title {{ title }}
          products
</template>

<script>
import CategoryList from './CategyList.vue';
import Products from './Products.vue';

export default {
  name: 'category',

  data: () => ({
    title: 'Название категории',
  }),
  components: {
    'category-list': CategoryList,
    products: Products,
  },
};
</script>
