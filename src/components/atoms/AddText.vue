<script setup lang="ts">
import { computed } from 'vue'
import useCustomField from '@/composable/useCustomField'

const props = defineProps(useCustomField.textProps)
const getForProps = computed(() => (props.tag === 'label' ? props.for : null))
</script>

<template>
  <component class="add-text" :is="tag" :for="getForProps">
    <slot />
  </component>
</template>
