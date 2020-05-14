<template lang="pug">
  .component-wrap
    .container
      .row
        .col-xs-12.col-sm-4.col-md-6.col-lg-6
          img.product-img(v-bind:src="`${publicPath}${img}`")
        .col-xs-12.col-sm-8.col-md-6.col-lg-6
          .product-description
            .product-subtitle Anreta Leather
            h1.product-title {{ title }}
            .product-price {{ productPrice }}
            .btn.mt-3 Заказать
            .description.mt-4 {{ description }}
</template>

<script>
export default {
  name: 'product',
  data: () => ({
    title: 'Кожаный кошелек BG7',
    price: '3499',
    img: 'Wallet_1_750x720_crop_center.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi urna, rhoncus ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi urna, rhoncus',
    publicPath: `${process.env.BASE_URL}img/`,
  }),
  computed: {
    productPrice() {
      return `ОТ ${this.price} РУБ`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .product-img{
    width:100%;
  }
  .btn{
    color: #fff;
    border: 1px solid #fff;
    background-color: #000;
    border-radius: 0px;
  }
</style>
