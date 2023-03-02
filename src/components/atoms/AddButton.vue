<script setup lang="ts">
import useCustomField from '@/composable/useCustomField'
const props = defineProps(useCustomField.buttonProps)
</script>

<template>
  <button class="add-button" :type="props.type">
    <slot />
  </button>
</template>
