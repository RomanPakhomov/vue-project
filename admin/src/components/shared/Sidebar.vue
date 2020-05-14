<template lang="pug">
  .sidebar
      .sidebar-wrapper
        .logo
          a.simple-text(href="#") Anreta Leather
        ul.nav
          li.nav-item
            router-link.nav-link(to='/main')
              BIconHouse.icon
              p Главная страница
          li.nav-item
            router-link.nav-link(to='/categories')
              BIconListUl.icon
              p Категории
          li.nav-item
            router-link.nav-link(to='/products')
              BIconGem.icon
              p Изделия
          li.nav-item
            router-link.nav-link(to='/promo')
              BIconGift.icon
              p Акции
          li.nav-item
            router-link.nav-link(to='/blog')
              BIconBook.icon
              p Статьи
          li.nav-item
            router-link.nav-link(to='/orders')
              BIconPeople.icon
              p Заявки
</template>

<script>
import { BIconHouse, BIconListUl, BIconBook, BIconGem, BIconGift, BIconPeople } from 'bootstrap-vue';

export default {
  name: 'Sidebar',
  components: { 
    BIconHouse,
    BIconListUl,
    BIconBook,
    BIconGem,
    BIconGift,
    BIconPeople
  }
}
</script>