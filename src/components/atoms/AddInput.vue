<script setup lang="ts">
import useCustomField from '@/composable/useCustomField'
const props = defineProps(useCustomField.inputProps)
</script>

<template>
  <input
    :type="props.type"
    :id="props.id"
    :name="props.name"
    :placeholder="props.placeholder"
    :class="props.classes"
    :value="props.modelValue"
    @input="
      $emit(
        'update:props.modelValue',
        ($event.target as HTMLInputElement).value
      )
    "
  />
</template>
