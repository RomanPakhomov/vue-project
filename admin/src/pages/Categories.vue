<template lang="pug">
  AdminLayout
    router-view
</template>

<script>
import AdminLayout from '../layout/AdminLayout.vue';

export default {
  name: 'Categories',
  data: () => ({
    title: 'Categories'
  }),
  components: {
    AdminLayout
  }
}
</script>