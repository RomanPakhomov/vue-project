<template lang="pug">
  .component-wrap
    ul.list-group.list-group-flush.main-list
      li.list-group-item(v-for="item, index in items" :key="index") {{ item.name }}
        .child-category(v-if="item.childrens")
          ul.list-group.list-group-flush
            li.list-group-item(v-for="item, index in item.childrens" :key="index") {{ item.name }}
</template>

<script>
export default {
  name: 'category-list',

  data: () => ({
    items: [
      {
        name: 'Кошельки',
        link: 'category1/',
        childrens: [
          {
            name: 'Женские',
            link: 'category1-1/',
          },
          {
            name: 'Мужские',
            link: 'category1-2/',
          },
        ],
      },
      {
        name: 'Сумки',
        link: 'category2/',
      },
      {
        name: 'Ремни',
        link: 'category3/',
      },
      {
        name: 'Чехлы',
        link: 'category4/',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .main-list{
    margin-top:48px;
  }
</style>
