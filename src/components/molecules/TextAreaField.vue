<script setup lang="ts">
import AddText from '../atoms/AddText.vue'
import AddTextArea from '../atoms/AddTextArea.vue'
import useCustomField from '@/composable/useCustomField'

const props = defineProps({
  ...useCustomField.textProps,
  ...useCustomField.textAreaProps,
  label: useCustomField.commonStrNoRequired
})
</script>

<template>
  <div class="ml-textarea-field"></div>
  <add-text tag="label" :for="id">{{ label }}</add-text>
  <add-text-area
    :id="props.id"
    :name="props.name"
    :placeholder="props.placeholder"
    :class="props.classes"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  ></add-text-area>
</template>
