<template lang="pug">
  .custom-control.custom-checkbox.my-1.mr-sm-2
      input#customControlInline.custom-control-input(type="checkbox")
      label.custom-control-label(for="customControlInline" :checked="checked") {{ value }}
</template>

<script>
export default {
  name: 'ChechBox',
  props: [
    'value',
    'checked'
  ]
}
</script>