<template lang="pug">
  nav.navbar.navbar-expand-md.navbar-dark.fixed-top
    button.navbar-toggler.collapsed(
      type='button',
      data-toggle='collapse',
      data-target='#navbarsExampleDefault',
      aria-controls='navbarsExampleDefault',
      aria-expanded='false',
      aria-label='Toggle navigation'
      v-on:click="menuShow = !menuShow")
      span.navbar-toggler-icon
    .navbar-collapse.collapse(
      v-bind:class="{show: menuShow}"
    )
      ul.navbar-nav.mr-auto
        li.nav-item(
          v-for="link in linkMenu"
          v-bind:key="`${link.url}`"
          v-on:click="menuShow = false"
        )
          router-link.nav-link(
            v-bind:to="`${link.url}`"
          ) {{ link.title }}
    router-link.navbar-brand( to="/" v-bind:style="`background-image:url(/public/images/logo.png)`")
    form.form-inline.my-2.my-lg-0
      font-awesome-icon(icon="search")
      input.form-control.mr-sm-2(type='text', placeholder='Поиск')
      a.my-2.my-sm-0(type='submit') Поиск
</template>

<script>
export default {
  name: 'header-app',
  data: () => ({
    linkMenu: [
      { title: 'Главная', url: '/' },
      { title: 'Каталог', url: '/catalog' },
      { title: 'Акции', url: '/promo' },
      { title: 'Блог', url: '/blog' },
      { title: 'О нас', url: '/about' },
    ],
    logoSrc: process.env.BASE_URL,
    menuShow: false,
  }),
};
</script>

<style lang="scss" scoped>
  .navbar{
    height: 100px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    display: flex;
    justify-content: space-between;
    .navbar-collapse{
      flex-grow: 0;
    }
    .navbar-brand{
      width: 150px;
      height: 80px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, 0%);
    }
  }
  form input{
    background-color: transparent;
    color: #fff !important;
    border: 0px;
    border-bottom: 1px solid #fff;
    border-radius: 0px;
    width: 100px !important;
  }
  input[type="search"]::-moz-placeholder {
    color: #ffd595; /* Цвет подсказывающего текста */
   }
  form input::-webkit-input-placeholder { color: #fff; }
  form input:-ms-input-placeholder { color: #fff; }
  form input::-ms-input-placeholder { color: #fff; }
  form input::placeholder { color: #fff; }
  a{
    color: #fff;
  }
  .nav-link{
    color: #fff !important;
  }
</style>
