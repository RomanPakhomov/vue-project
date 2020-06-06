<template lang="pug">
  AdminLayout
    .test {{ title }}
</template>

<script>
import AdminLayout from '../layout/AdminLayout.vue';

export default {
  name: 'Orders',
  data: () => ({
    title: 'Orders'
  }),
  components: {
    AdminLayout 
  }
}
</script>