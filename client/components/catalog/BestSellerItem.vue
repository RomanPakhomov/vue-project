<template lang="pug">
  .card.my-3
    .card-body
      .card-img-top(v-bind:style="`background-image:url(${publicPath}${img})`")
      .card-title {{ title }}
      .price {{ productPrice }}
</template>

<script>
export default {
  name: 'best-seller-item',
  props: {
    title: String,
    url: String,
    price: String,
    img: String,
    img2: String,
  },
  data: () => ({
    publicPath: `/public/images/`,
  }),
  computed: {
    productPrice() {
      return `ОТ ${this.price} РУБ`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    min-height:250px;
    border-radius: 0px;
    border: 0px;
    .card-body{
      border-radius: 0px;
      padding: 0px;
      text-align: center;
      .card-img-top{
        height:150px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .card-title{
        margin-top: 15px;
        margin-bottom: 0px;
      }
      .price{
        font-size: 12px;
        color: #6b6b6b;
      }
    }
  }
</style>
