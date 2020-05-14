<template lang="pug">
  .component-wrap
    .footer-wrap.mt-5(v-bind:style="`background-image:url(${publicPath}${footerImage})`")
      .footer.py-5
        .container
          .row
            .col-sm-12.col-md-6.col-lg-6.col-xl-3
              .list-group
                .list-group-title {{ menuMain.title }}
                .list-group-item(
                  v-for="item, index in menuMain.items" :key="index") {{ item.title }}
            .col-sm-12.col-md-6.col-lg-6.col-xl-3
              .list-group
                .list-group-title {{ menuCategories.title }}
                .list-group-item(
                  v-for="item, index in menuCategories.items" :key="index") {{ item.title }}
            .col-sm-12.col-md-6.col-lg-6.col-xl-3
              .list-group
                .list-group-title {{ menuSocial.title }}
                .list-group-item(
                  v-for="item, index in menuSocial.items" :key="index") {{ item.title }}
            .col-sm-12.col-md-6.col-lg-6.col-xl-3
              .list-group
                .list-group-title {{ menuContacts.title }}
                .list-group-item(
                  v-for="item, index in menuContacts.items" :key="index") {{ item.title }}
</template>

<script>
export default {
  name: 'footer-app',
  data: () => ({
    menuMain: {
      title: 'Anreta leather',
      items: [
        { title: 'Главная', url: '/' },
        { title: 'Каталог', url: '/catalog' },
        { title: 'Акции', url: '/promo' },
        { title: 'Блог', url: '/blog' },
        { title: 'О нас', url: '/about' },
      ],
    },
    menuCategories: {
      title: 'Категории товаров',
      items: [
        { title: 'Главная', url: '/' },
        { title: 'Каталог', url: '/catalog' },
        { title: 'Акции', url: '/promo' },
        { title: 'Блог', url: '/blog' },
        { title: 'О нас', url: '/about' },
      ],
    },
    menuSocial: {
      title: 'Социальные сети',
      items: [
        { title: 'Главная', url: '/' },
        { title: 'Каталог', url: '/catalog' },
        { title: 'Акции', url: '/promo' },
        { title: 'Блог', url: '/blog' },
        { title: 'О нас', url: '/about' },
      ],
    },
    menuContacts: {
      title: 'Контакты',
      items: [
        { title: 'Главная', url: '/' },
        { title: 'Каталог', url: '/catalog' },
        { title: 'Акции', url: '/promo' },
        { title: 'Блог', url: '/blog' },
        { title: 'О нас', url: '/about' },
      ],
    },
    footerImage: '16264200.jpg',
    publicPath: `/public/images/`,
  }),
};
</script>

<style lang="scss" scoped>
  .footer-wrap{
    min-height:300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    .footer{
      width:100%;
      height:100%;
      background-color: #100b08e6;
      flex: 1;
    }
    .list-group-title{
      font-size: 16px;
      color:#ffffffd4;
      padding: 5px;
      margin: 15px 0px;
      border-bottom:1px solid #ffffff3d;
    }
    .list-group-item{
      color: #ffffffa6;
      padding: 5px;
      border-radius: 0px;
      border: 0px;
      background-color: transparent;
    }
  }
</style>
