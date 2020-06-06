<template lang="pug">
  .file-status(v-show="!deleted")
    .d-flex.flex-row.align-items-center
      .file-name.flex-grow-1 {{ file.name }}
      BIconX.remove(@click="removeFile")
    .progress
      .progress-bar.progress-bar-striped.progress-bar-animated(
        role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{'width': percent + '%'}"
      )
</template>

<script>
import { BIconX } from 'bootstrap-vue';
import axios from 'axios';

export default {
  name: 'file-status',
  props: [
    'file'
  ],
  data: () => ({
    percent: 0,
    uploadResponse: null,
    removingResponse: null,
    deleted: false
  }),
  methods: {
    async removeFile() {
      try{
        this.removingResponse = await axios.post('http://localhost:4000/remove', {
          fileName: this.uploadResponse.data
        });
        this.deleted = true
      } catch(e) {
        console.log(e);
      }    
    }
  },
  async mounted(){
    try{
      const formData = new FormData();
      formData.append('file', this.file);
        this.uploadResponse = await axios.post('http://localhost:4000/download', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: function(progressEvent) {
            this.percent = parseInt(Math.round(( progressEvent.loaded / progressEvent.total) * 100));
          }.bind(this)
        });
      console.log('file uploadded success: ', this.files)
    } catch(e) {
      console.log(e);
    }
  },
  components:{
    BIconX
  }
}
</script>

<style scoped lang="scss">
.file-status{
  margin-bottom:5px;
}
.progress{
  height: 5px;
}
.remove{
  color: red;
  cursor: pointer;
}
.remove:hover{
  font-weight: bold
}
</style>