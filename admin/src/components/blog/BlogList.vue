<template lang="pug">
  .card
    .card-header
      .d-flex.justify-content-between
        .card-title-wrapper
          h4.card-title Список записей
        router-link.btn.btn-outline-dark.btn-sm(type="button" to="/blog/new") Создать запись
    .card-body
      .table-responsive
        table.table.table-hover.table-striped
          thead
            th №
            th Заголовок
            th Дата
            th Статус
            th
          tbody
            tr(v-for="item, index in articles" :key="item.id")
              td {{ index }}
              td {{ item.title }}
              td {{ item.date.slice(0,10) }}
              td {{ item.status }}
              td 
                router-link(:to="`/blog/${item.id}`")
                  BIconPencilSquare
</template>

<script>
import axios from 'axios';
import { BIconPencilSquare } from 'bootstrap-vue';

export default {
  name: 'BlogList',
  data: () => ({
    title: 'BlogList',
    articles: null
  }),
  mounted() {
    axios
      .get('http://localhost:4000/blog/')
      .then(res => this.articles = res.data)
      .catch(err => console.log(err))
  },
  components: {
    BIconPencilSquare
  }
}
</script>