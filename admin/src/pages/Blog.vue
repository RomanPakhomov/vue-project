<template lang="pug">
  AdminLayout
    router-view
</template>

<script>
import AdminLayout from '../layout/AdminLayout.vue';

export default {
  name: 'Blog',
  data: () => ({
    title: 'Blog'
  }),
  components: {
    AdminLayout
  }
}
</script>