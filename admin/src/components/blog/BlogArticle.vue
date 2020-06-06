<template lang="pug">
  .card
    .card-header
      .d-flex.justify-content-between
        .card-title-wrapper
          h4.card-title {{ pageTitle() }}
    .card-body
      .form
        Input(
          name="Заголовок"
          type="text"
          alias="title"
          ref="title"
          :defaultValue="article.title"
          :rules="['required']"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        Input(
          name="Подзаголовок"
          type="text"
          alias="subTitle"
          ref="subTitle"
          :defaultValue="article.subTitle"
          :rules="['required']"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        Input(
          name="Алиас"
          type="text"
          alias="link"
          ref="link"
          :defaultValue="article.link"
          :rules="['snake-case', 'required']"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        .row.align-items-center
          .col-md-6
            Input(
              name="Отображаемая дата"
              type="date"
              alias="date"
              ref="date"
              :defaultValue="article.date && article.date.slice(0,10) || dateNow()"
              :rules="['required']"
              @fillValue="fillValue" @fillValid="fillValid"
            )
          .col-md-6
            ChechBox(
              value="Опубликовано"
            )
        TextArea(
          rows="5"
          name="Содержание"
          alias="body"
          ref="body"
          :defaultValue="article.body"
          :rules="['required']"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        hr
        Input(
          name="Meta-title"
          type="text"
          alias="metaTitle"
          ref="metaTitle"
          :defaultValue="article.metaTitle"
          :rules="['required']"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        Input(
          name="Meta-description"
          type="text"
          alias="metaDescription"
          ref="metaDescription"
          :defaultValue="article.metaDescription"
          :rules="['required']"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        Input(
          name="Meta-keywords"
          type="text"
          alias="metaKeywords"
          ref="metaKeywords"
          :this.defaultValue="article.metaKeywords"
          @fillValid="fillValid" @fillValue="fillValue"
        )
        button.btn.btn-success(@click="checkForm") Добавить
      br
      FileUploader(multiple="false")
</template>

<script>
import Input from '../form/Input.vue';
import TextArea from '../form/TextArea.vue';
import ChechBox from '../form/Checkbox.vue';
import FileUploader from '../shared/FileUploader.vue';
import axios from 'axios';

export default {
  name: 'NewBlogArticle',
  data: () => ({
    title: null,
    subTitle: null, 
    link: null,
    body: null,
    metaTitle: null, 
    metaDescription: null,
    metaKeywords: null,
    date: null,
    valid: true,
    article: {},
    file: null
  }),
  components: {
    Input,
    TextArea,
    ChechBox,
    FileUploader
  },
  mounted() {
    if(this.$route.params.id){
      axios
        .get(`http://localhost:4000/blog/post/?id=${this.$route.params.id}`)
        .then(res => [ this.article ] = res.data )
        .catch(err => console.log(err))
    }
  },
  methods: {
    fillValid: function(value){
      this.valid = this.valid && value;
    },
    fillValue: function(key, value){
      this[key] = value;
    },
    checkForm: function() {
      this.valid = true;
      for (const ref in this.$refs) {
        this.$refs[ref].transferValue()
      }
    },
    takeFile: function() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    sendFile: async function() {
      const formData = new FormData();
      formData.append('file', this.file);
      try{
        await axios.post('http://localhost:4000/download', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
        console.log('file uploaded!')
      } catch(e) {
        console.log('error: ', e)
      }
      
    },
    dateNow: function() {
      const now = new Date();
      return `${now.getFullYear()}-${('0' + (now.getMonth()+1)).slice(-2)}-${now.getDate()}`
    },
    pageTitle: function() {
      return this.$route.params.id ? 'Редактирование записи' : 'Новая запись'; 
    }
  },
}
</script>