<template lang="pug">
  .card
    .card-header
      .d-flex.justify-content-between
        .card-title-wrapper
          h4.card-title Новая запись
    .card-body
      .form
        .form-group
          label(for="title") Заголовок
          input#title.form-control.form-control-sm(type="text")
        .form-group
          label(for="sub-title") Подзаголовок
          input#sub-title.form-control.form-control-sm(type="text")
        .form-group
          label(for="url") Алиас
          input#url.form-control.form-control-sm(type="text")
          small#url.form-text.text-muted example-alias-for-article
        .form-group
          label(for="body") Содержание
          textarea#body.form-control.form-control-sm(rows="5")
        hr
        .form-group
          label(for="meta-title") Meta-title
          input#meta-title.form-control.form-control-sm(type="text")
        .form-group
          label(for="meta-description") Meta-description
          textarea#meta-description.form-control.form-control-sm(rows="2")
        .form-group
          label(for="meta-keywords") Meta-keywords
          textarea#meta-keywords.form-control.form-control-sm(rows="2")
</template>

<script>
export default {
  name: 'NewBlogArticle'
}
</script>