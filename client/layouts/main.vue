<template lang="pug">
  .main-app-wrap
    headerApp
    nuxt
    footerApp
</template>

<script>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';

export default {
  components: {
    headerApp: Header,
    footerApp: Footer,
  },
}
</script>