<template lang="pug">
  AdminLayout
    router-view
</template>

<script>
import AdminLayout from '../layout/AdminLayout.vue';

export default {
  name: 'Promo',
  data: () => ({
    title: 'Promo'
  }),
  components: {
    AdminLayout
  }
}
</script>