<script setup lang="ts">
import { toRefs } from 'vue'
import useCustomField from '@/composable/useCustomField'
const props = defineProps(useCustomField.inputProps)
const { type, id, name, placeholder, classes, modelValue } = toRefs(props)
// defineEmits(['changeVal'])
</script>

<template>
  <input
    v-bind="{ type, id, name, placeholder, classes, value: modelValue }"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
