<script setup lang="ts">
import { toRefs } from 'vue'
import AddText from '../atoms/AddText.vue'
import AddSelect from '../atoms/AddSelect.vue'
import useCustomField from '@/composable/useCustomField'

const props = defineProps({
  ...useCustomField.textProps,
  ...useCustomField.selectProps,
  label: useCustomField.commonStrNoRequired
})

const { id, name, classes, modelValue, options, placeholder } = toRefs(props)

const emits = defineEmits(['changeSelectVal'])
</script>

<template>
  <add-text tag="label" :for="id">{{ `${label}: ` }}</add-text>
  <add-select
    :id="id"
    :name="name"
    :class="classes"
    :value="modelValue"
    :options="options"
    :placeholder="placeholder"
    @input="emits('changeSelectVal', $event)"
  ></add-select>
</template>
