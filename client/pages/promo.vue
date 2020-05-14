<template lang="pug">
  .page-wrap
    headerApp
    .page-body {{ title }}
    footerApp
</template>

<script>
export default {
  name: 'promo',
  layout: 'main',
  data: () => ({
    title: 'promo page',
  }),
  
};
</script>
