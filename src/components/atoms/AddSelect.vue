<script setup lang="ts">
import { toRefs } from 'vue'
import useCustomField from '@/composable/useCustomField'
const props = defineProps(useCustomField.selectProps)

const { id, name, classes, modelValue, options, placeholder } = toRefs(props)
</script>

<template>
  <select
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >
    <option disabled hidden value="">
      {{ placeholder }}
    </option>
    <option
      v-for="option in options"
      :key="JSON.stringify(option)"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style>
select {
  color: grey;
}
option:not(first-child) {
  color: black;
}
.custom-select {
  color: black;
}
</style>
