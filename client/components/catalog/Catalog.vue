<template lang="pug">
  .component-wrap
    router-view
</template>

<script>
export default {
  name: 'catalog',

  data: () => ({
    title: 'products page',
  }),
};
</script>

<style lang="scss" scoped>
  .component-wrap{
    padding-top:100px;
  }
</style>
