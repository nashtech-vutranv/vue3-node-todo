<script setup lang="ts">
import { toRefs } from 'vue'
import AddText from '../atoms/AddText.vue'
import AddInput from '../atoms/AddInput.vue'
import useCustomField from '@/composable/useCustomField'

const props = defineProps({
  ...useCustomField.checkboxProps,
  ...useCustomField.textProps,
  label: useCustomField.commonStrNoRequired
})

const emits = defineEmits(['updateCheckboxVal'])

const { id, name, classes, modelValue, label } = toRefs(props)
</script>

<template>
  <add-input
    type="checkbox"
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
    @change="
      emits('updateCheckboxVal', ($event.target as HTMLInputElement).checked)
    "
  />
  <add-text tag="label" :for="id">{{ `${label}: ` }}</add-text>
</template>
