<template lang="pug">
  .page-wrap {{ title }}
</template>

<script>
export default {
  name: 'info',
  layout: 'main',
  data: () => ({
    title: 'about page',
  }),
};
</script>
