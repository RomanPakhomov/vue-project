<template lang="pug">
  .component-wrap
    .row
      .col-sm-6.col-md-3.col-lg-3(v-for="item, index in items" :key="index")
        product-item(
          v-bind:title="item.title"
          v-bind:price="item.price"
          v-bind:url="item.url"
          v-bind:img="item.img"
          v-bind:img2="item.img2"
        )
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'products',

  data: () => ({
    items: [
      {
        id: '1',
        title: 'Кошелек',
        img: 'Wallet_1_750x720_crop_center.jpg',
        img2: 'Uncharted_Satchel-1_750x943_crop_center.jpg',
        price: '3499',
        url: './catalog/wallets',
      },
      {
        id: '2',
        title: 'Сумка',
        img: 'Uncharted_Satchel-1_750x943_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '8499',
        url: './catalog/wallets',
      },
      {
        id: '3',
        title: 'Ремень',
        img: 'Belt_Dark_Caramel_750x960_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '2499',
        url: './catalog/wallets',
      },
      {
        id: '4',
        title: 'Записная книжка',
        img: 'The_Scribe_Web-1_750x960_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '1499',
        url: './catalog/wallets',
      },
      {
        id: '5',
        title: 'Кошелек',
        img: 'Wallet_1_750x720_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '3499',
        url: './catalog/wallets',
      },
      {
        id: '6',
        title: 'Сумка',
        img: 'Uncharted_Satchel-1_750x943_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '8499',
        url: './catalog/wallets',
      },
      {
        id: '7',
        title: 'Ремень',
        img: 'Belt_Dark_Caramel_750x960_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '2499',
        url: './catalog/wallets',
      },
      {
        id: '8',
        title: 'Записная книжка',
        img: 'The_Scribe_Web-1_750x960_crop_center.jpg',
        img2: 'Wallet_1_750x720_crop_center.jpg',
        price: '1499',
        url: './catalog/wallets',
      },
    ],
  }),
  components: {
    'product-item': ProductItem,
  },
};
</script>
