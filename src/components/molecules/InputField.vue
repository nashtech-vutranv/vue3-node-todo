<script setup lang="ts">
import { toRefs } from 'vue'
import AddText from '../atoms/AddText.vue'
import AddInput from '../atoms/AddInput.vue'
import useCustomField from '@/composable/useCustomField'

const props = defineProps({
  ...useCustomField.inputProps,
  ...useCustomField.textProps,
  label: useCustomField.commonStrNoRequired
})

const { type, id, name, placeholder, classes, modelValue, label } =
  toRefs(props)
</script>

<template>
  <add-text tag="label" :for="id">{{ `${label}: ` }}</add-text>
  <add-input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
