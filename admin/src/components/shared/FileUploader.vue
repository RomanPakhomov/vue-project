<template lang="pug">
  .image-form
    .status-wrap(v-if="files")
      .files(v-for="file, index in files" :key="index+Date.now()")
        FileStatus(:file="file")
    .form-group
      label(for="file" class="file-label") Добавить файл
      input(id="file" type="file" ref="file" @change="uploadFile" v-bind:multiple="multiple" name="avatar")
</template>

<script>
import { BIconX } from 'bootstrap-vue';
import axios from 'axios';
import FileStatus from './FileStatus.vue';

export default {
  name: 'file-uploader',
  props: [
    'multiple'
  ],
  data: () => ({
    files: null,
  }),
  methods: {
    uploadFile: async function() {
      this.files = null
      this.files = this.$refs.file.files;
    }
  },
  components: {
    BIconX,
    FileStatus
  }
}
</script>

<style scoped lang="scss">
#file{
  display: none;
}
.file-label{
  padding: 15px 30px;
  background-color: aliceblue;
  border-radius: 5px;
  width: 100%;
  border: dashed 1px #808080;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.file-label:hover{
  background-color: #e1f1ff;
  transition: 0.3s;
}
.status-wrap{
  margin-bottom:20px;
}
</style>