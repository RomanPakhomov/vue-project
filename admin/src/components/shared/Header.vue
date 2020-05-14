<template lang="pug">
  nav.navbar.navbar-expand-lg
    .container-fluid
      a.navbar-brand(href='#') {{ title || 'Панель администратора' }}
      button.navbar-toggler.navbar-toggler-right(
        type='button' 
        aria-controls='navigation-index' 
        aria-expanded='false' 
        aria-label='Toggle navigation' 
      )
        span.navbar-toggler-bar.burger-lines
        span.navbar-toggler-bar.burger-lines
        span.navbar-toggler-bar.burger-lines
      .collapse.navbar-collapse.justify-content-end
        ul.navbar-nav.ml-auto
          li.nav-item
            a.nav-link(href='#') Выйти
</template>

<script>
export default {
  name: 'Header',
  computed: {
    title: function() {
      return this.$route.meta.title
    }
  }
}
</script>