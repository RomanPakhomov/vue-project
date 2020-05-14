<template lang="pug">
  .wrapper
    Sidebar
    .main-panel
      ContentHeader
      .content
        .container-fluid
          router-view
      ContentFooter
</template>

<script>
import Header from './shared/Header.vue';
import Footer from './shared/Footer.vue';
import Sidebar from './shared/Sidebar.vue';

export default {
  name: 'Admin',
  components: {
    ContentHeader: Header,
    ContentFooter: Footer,
    Sidebar: Sidebar
  }
}
</script>