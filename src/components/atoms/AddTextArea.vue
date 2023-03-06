<script setup lang="ts">
import useCustomField from '@/composable/useCustomField'

const props = defineProps(useCustomField.textAreaProps)
</script>

<template>
  <input
    :id="props.id"
    :name="props.name"
    :placeholder="props.placeholder"
    :class="props.classes"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
