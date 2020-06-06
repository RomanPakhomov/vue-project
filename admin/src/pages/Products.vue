<template lang="pug">
  AdminLayout
    router-view
</template>

<script>
import AdminLayout from '../layout/AdminLayout.vue';

export default {
  name: 'Products',
  data: () => ({
    title: 'Products'
  }),
  components: {
    AdminLayout
  }
}
</script>