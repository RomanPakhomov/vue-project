<template lang="pug">
  .wrapper
    Sidebar
    .main-panel
      ContentHeader
      .content
        .container-fluid
          slot
      ContentFooter
</template>

<script>
import Header from '../components/shared/Header.vue';
import Footer from '../components/shared/Footer.vue';
import Sidebar from '../components/shared/Sidebar.vue';

export default {
  name: 'Admin',
  components: {
    ContentHeader: Header,
    ContentFooter: Footer,
    Sidebar: Sidebar
  }
}
</script>