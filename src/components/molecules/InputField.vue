<script setup lang="ts">
import AddText from '../atoms/AddText.vue'
import AddInput from '../atoms/AddInput.vue'
import useCustomField from '@/composable/useCustomField'

const props = defineProps({
  ...useCustomField.inputProps,
  ...useCustomField.textProps,
  label: useCustomField.commonStrNoRequired
})
</script>

<template>
  <add-text tag="label" :for="id">{{ label }}</add-text>
  <add-input
    :type="props.type"
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
