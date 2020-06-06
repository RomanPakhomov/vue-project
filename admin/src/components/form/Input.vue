<template lang="pug">
  .form-group
    label(:for="alias") {{ name }}
    input.form-control.form-control-sm(
      :id="alias"
      :type="type"
      v-model="value"
      v-bind:class="{'is-invalid': !valid}"
      @change="(event) => transferValue()"
    )
    div.invalid-feedback {{ validateMessage }}
</template>

<script>
import validate from '../../tools/validateInput';

export default {
  name: 'Input',
  props: [
    'name',
    'alias',
    'type',
    'rules',
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