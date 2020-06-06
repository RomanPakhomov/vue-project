<template lang="pug">
  AdminLayout
    .test {{ title }}
</template>

<script>
import AdminLayout from '../layout/AdminLayout.vue';

export default {
  name: 'Dasboard',
  data: () => ({
    title: 'Dashboard'
  }),
  components: {
    AdminLayout
  }
}
</script>