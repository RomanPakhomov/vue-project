<template lang="pug">
  .page-wrap {{ title }}
</template>

<script>
export default {
  name: 'blog',
  layout: 'main',
  data: () => ({
    title: 'blog page',
  }),
};
</script>
