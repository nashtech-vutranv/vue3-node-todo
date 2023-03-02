<script setup lang="ts">
import useCustomField from '@/composable/useCustomField'
const props = defineProps(useCustomField.selectProps)
</script>

<template>
  <select
    :id="props.id"
    :name="props.name"
    :class="props.classes"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
    <option
      v-for="option in options"
      :key="JSON.stringify(option)"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
