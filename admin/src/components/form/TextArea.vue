<template lang="pug">
  .form-group
    label(:for="alias") {{ name }}
    textarea.form-control.form-control-sm(
      :id="alias"
      :rows="rows"
      v-model="value"
      v-bind:class="{'is-invalid': !valid}"
      @change="(event) => transferValue()"
    ) {{ value }}
    div.invalid-feedback {{ validateMessage }}
</template>

<script>
import validate from '../../tools/validateInput';

export default {
  name: 'TextArea',
  props: [
    'name',
    'alias',
    'rules',
    'rows',
    'defaultValue'
  ],
  data: () => ({
    value: '',
    validateMessage: null,
    valid: true
  }),
  watch: {
    defaultValue(){
      this.value = this.defaultValue;
    }
  },
  methods: {
    transferValue: function() {
      if(this.rules) {
        const result = validate(this.value, this.rules);
        this.valid = result.valid;
        this.validateMessage = result.validateMessage;
        this.$emit('fillValid', this.valid);
      };
      this.$emit('fillValue', this.alias, this.value)
    }
  }
}
</script>