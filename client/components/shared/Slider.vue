<template lang="pug">
  .component-wrap
    b-carousel.slider(
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="100")
      b-carousel-slide.slide(
        v-for="item in images"
        :key="item.id"
        :style="`background-image: url(${publicPath}${item.src})`"
      )
</template>

<script>
export default {
  name: 'slider',

  data: () => ({
    title: 'slider item',
    images: [
      {
        id: 1,
        src: 'bag-931937_1920.jpg',
      },
      {
        id: 2,
        src: 'handbag-1478814_1920.jpg',
      },
      {
        id: 3,
        src: 'purse-407176_1920.jpg',
      },
    ],
    publicPath: `/public/images/`,
  }),
};
</script>

<style lang="scss" scoped>
  .slider{
    height: 500px;
    .slide{
      height: 500px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>
