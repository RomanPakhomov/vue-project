<template lang="pug">
  .component-wrap.mt-5
    .container
      h2.title {{ title }}
      .row.my-3
        .col-sm-6.col-md-6.col-lg-6.col-xl-3(v-for="item in categories" :key="item.id")
          .card.my-3
            .card-body.d-flex.align-items-end(
              v-bind:style="`background-image:url(${publicPath}${item.img});`")
              .card-body-content
                .card-title {{ item.title }}
                router-link.btn(v-bind:to="`${item.url}`") Смотреть изделия
</template>

<script>
export default {
  name: 'categies',

  data: () => ({
    title: 'Категории изделий',
    categories: [
      {
        id: '1',
        title: 'Кожаные кошельки',
        img: 'Wallet_1_750x720_crop_center.jpg',
        url: './catalog/wallets',
      },
      {
        id: '2',
        title: 'Кожаные сумки',
        img: 'Uncharted_Satchel-1_750x943_crop_center.jpg',
        url: './catalog/wallets',
      },
      {
        id: '3',
        title: 'Акссессуары и ремни',
        img: 'Belt_Dark_Caramel_750x960_crop_center.jpg',
        url: './catalog/wallets',
      },
      {
        id: '4',
        title: 'Кейсы, чехлы и другое',
        img: 'The_Scribe_Web-1_750x960_crop_center.jpg',
        url: './catalog/wallets',
      },
    ],
    publicPath: `/public/images/`,
  }),
};
</script>

<style lang="scss" scoped>
  .card{
    min-height:250px;
    color: #fff;
    border-radius: 0px;
    .card-body{
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0px;
    }
    .btn{
      color: #fff;
      border: 1px solid #fff;
      border-radius: 0px;
    }
  }
  .title{
    text-align:center;
  }
</style>
